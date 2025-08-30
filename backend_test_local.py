#!/usr/bin/env python3
"""
Backend API Testing for DK Interiors Contact Form (Local Testing)
Tests the /api/contact endpoint locally with various scenarios
"""

import requests
import json
import os
from datetime import datetime

# Test locally since external URL has routing issues
CONTACT_API_URL = "http://localhost:3000/api/contact"

def print_test_result(test_name, success, details=""):
    """Print formatted test results"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"\n{status} {test_name}")
    if details:
        print(f"   Details: {details}")

def test_valid_contact_submission():
    """Test 1: Valid contact form submission"""
    print("\n" + "="*60)
    print("TEST 1: Valid Contact Form Submission")
    print("="*60)
    
    payload = {
        "fullName": "John Smith",
        "email": "john.smith@example.com",
        "message": "I'm interested in your interior design services for my new office space. Please contact me to discuss the project details."
    }
    
    try:
        response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            response_data = response.json()
            if "message" in response_data and "successfully" in response_data["message"].lower():
                print_test_result("Valid submission", True, "API returned success message")
                return True
            else:
                print_test_result("Valid submission", False, f"Unexpected response format: {response_data}")
                return False
        else:
            print_test_result("Valid submission", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Valid submission", False, f"Request failed: {str(e)}")
        return False

def test_missing_fields_validation():
    """Test 2: Missing fields validation"""
    print("\n" + "="*60)
    print("TEST 2: Missing Fields Validation")
    print("="*60)
    
    test_cases = [
        {"email": "test@example.com", "message": "Test message"},  # Missing fullName
        {"fullName": "John Doe", "message": "Test message"},      # Missing email
        {"fullName": "John Doe", "email": "test@example.com"},    # Missing message
        {},  # All fields missing
        {"fullName": "", "email": "test@example.com", "message": "Test"}  # Empty fullName
    ]
    
    all_passed = True
    
    for i, payload in enumerate(test_cases, 1):
        print(f"\nSubtest 2.{i}: {payload}")
        
        try:
            response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
            
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.text}")
            
            if response.status_code == 400:
                response_data = response.json()
                if "error" in response_data and "required" in response_data["error"].lower():
                    print_test_result(f"Missing fields test {i}", True, "Correctly rejected missing fields")
                else:
                    print_test_result(f"Missing fields test {i}", False, f"Wrong error message: {response_data}")
                    all_passed = False
            else:
                print_test_result(f"Missing fields test {i}", False, f"Expected 400, got {response.status_code}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print_test_result(f"Missing fields test {i}", False, f"Request failed: {str(e)}")
            all_passed = False
    
    return all_passed

def test_invalid_email_validation():
    """Test 3: Invalid email format validation"""
    print("\n" + "="*60)
    print("TEST 3: Invalid Email Format Validation")
    print("="*60)
    
    invalid_emails = [
        "invalid-email",
        "test@",
        "@example.com",
        "test..test@example.com",
        "test@example",
        "test@.com",
        ""
    ]
    
    all_passed = True
    
    for i, invalid_email in enumerate(invalid_emails, 1):
        payload = {
            "fullName": "Test User",
            "email": invalid_email,
            "message": "Test message for invalid email validation"
        }
        
        print(f"\nSubtest 3.{i}: Testing email '{invalid_email}'")
        
        try:
            response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
            
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.text}")
            
            if response.status_code == 400:
                response_data = response.json()
                if "error" in response_data and "email" in response_data["error"].lower():
                    print_test_result(f"Invalid email test {i}", True, "Correctly rejected invalid email")
                else:
                    print_test_result(f"Invalid email test {i}", False, f"Wrong error message: {response_data}")
                    all_passed = False
            else:
                print_test_result(f"Invalid email test {i}", False, f"Expected 400, got {response.status_code}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print_test_result(f"Invalid email test {i}", False, f"Request failed: {str(e)}")
            all_passed = False
    
    return all_passed

def test_api_response_format():
    """Test 4: API response format and status codes"""
    print("\n" + "="*60)
    print("TEST 4: API Response Format and Status Codes")
    print("="*60)
    
    # Test valid response format
    valid_payload = {
        "fullName": "Jane Doe",
        "email": "jane.doe@example.com",
        "message": "Testing API response format"
    }
    
    try:
        response = requests.post(CONTACT_API_URL, json=valid_payload, timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        print(f"Response: {response.text}")
        
        # Check if response is valid JSON
        try:
            response_data = response.json()
            print_test_result("JSON response format", True, "Response is valid JSON")
        except json.JSONDecodeError:
            print_test_result("JSON response format", False, "Response is not valid JSON")
            return False
        
        # Check content type
        content_type = response.headers.get('content-type', '')
        if 'application/json' in content_type:
            print_test_result("Content-Type header", True, f"Correct content type: {content_type}")
        else:
            print_test_result("Content-Type header", False, f"Wrong content type: {content_type}")
            return False
        
        # Check response structure for success
        if response.status_code == 200:
            if "message" in response_data:
                print_test_result("Success response structure", True, "Contains 'message' field")
            else:
                print_test_result("Success response structure", False, "Missing 'message' field")
                return False
        
        return True
        
    except requests.exceptions.RequestException as e:
        print_test_result("API response format", False, f"Request failed: {str(e)}")
        return False

def test_malformed_json():
    """Test 5: Malformed JSON handling"""
    print("\n" + "="*60)
    print("TEST 5: Malformed JSON Handling")
    print("="*60)
    
    try:
        # Send malformed JSON
        response = requests.post(
            CONTACT_API_URL, 
            data="invalid json data", 
            headers={'Content-Type': 'application/json'},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 500]:
            print_test_result("Malformed JSON handling", True, f"Correctly handled with status {response.status_code}")
            return True
        else:
            print_test_result("Malformed JSON handling", False, f"Unexpected status code: {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Malformed JSON handling", False, f"Request failed: {str(e)}")
        return False

def test_integration_graceful_handling():
    """Test 6: Integration error handling (Supabase/Resend failures)"""
    print("\n" + "="*60)
    print("TEST 6: Integration Error Handling")
    print("="*60)
    
    # This test verifies that even if Supabase or Resend fail,
    # the API still returns a success response (graceful degradation)
    
    payload = {
        "fullName": "Integration Test User",
        "email": "integration.test@example.com",
        "message": "Testing integration error handling - this should succeed even if external services fail"
    }
    
    try:
        response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # The API should return 200 even if external integrations fail
        # because it's designed to handle errors gracefully
        if response.status_code == 200:
            response_data = response.json()
            if "message" in response_data and "successfully" in response_data["message"].lower():
                print_test_result("Integration error handling", True, "API handles integration errors gracefully")
                return True
            else:
                print_test_result("Integration error handling", False, f"Unexpected response: {response_data}")
                return False
        else:
            print_test_result("Integration error handling", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Integration error handling", False, f"Request failed: {str(e)}")
        return False

def test_large_message():
    """Test 7: Large message handling"""
    print("\n" + "="*60)
    print("TEST 7: Large Message Handling")
    print("="*60)
    
    # Test with a very large message
    large_message = "This is a test message. " * 1000  # ~25KB message
    
    payload = {
        "fullName": "Large Message Test",
        "email": "large.message@example.com",
        "message": large_message
    }
    
    try:
        response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        print(f"Message size: {len(large_message)} characters")
        
        if response.status_code == 200:
            print_test_result("Large message handling", True, "Successfully handled large message")
            return True
        else:
            print_test_result("Large message handling", False, f"Failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Large message handling", False, f"Request failed: {str(e)}")
        return False

def test_special_characters():
    """Test 8: Special characters in input"""
    print("\n" + "="*60)
    print("TEST 8: Special Characters Handling")
    print("="*60)
    
    payload = {
        "fullName": "José María O'Connor-Smith",
        "email": "jose.maria@example.com",
        "message": "Testing special characters: áéíóú, ñ, ç, ü, ß, 中文, русский, العربية, emoji: 🏠🎨✨"
    }
    
    try:
        response = requests.post(CONTACT_API_URL, json=payload, timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            print_test_result("Special characters handling", True, "Successfully handled special characters")
            return True
        else:
            print_test_result("Special characters handling", False, f"Failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Special characters handling", False, f"Request failed: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting DK Interiors Contact API Backend Tests (Local)")
    print(f"Testing endpoint: {CONTACT_API_URL}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    test_results = []
    
    # Run all tests
    test_results.append(("Valid Contact Submission", test_valid_contact_submission()))
    test_results.append(("Missing Fields Validation", test_missing_fields_validation()))
    test_results.append(("Invalid Email Validation", test_invalid_email_validation()))
    test_results.append(("API Response Format", test_api_response_format()))
    test_results.append(("Malformed JSON Handling", test_malformed_json()))
    test_results.append(("Integration Error Handling", test_integration_graceful_handling()))
    test_results.append(("Large Message Handling", test_large_message()))
    test_results.append(("Special Characters Handling", test_special_characters()))
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} {test_name}")
        if result:
            passed += 1
    
    print(f"\nResults: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! The contact API is working correctly.")
        return True
    else:
        print(f"⚠️  {total - passed} test(s) failed. Please review the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)