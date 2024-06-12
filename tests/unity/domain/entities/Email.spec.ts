/**
 * Unit tests for the Email class using Vitest.
 * @module EmailClassTests
 */

import { Email } from '../../../../src/domain/valueObjects/Email'
import { describe, expect, it } from 'vitest'


/**
 * Test suite for the Email class.
 * @function
 * @name EmailClassTests
 */
describe('EmailClass', () => {
  /**
   * Test case to verify that it creates an email instance with the provided email.
   * @function
   * @name shouldCreateEmailInstanceWithProvidedEmail
   */
  it('should create a email instance with provided email', () => {
    const email = new Email({ address: 'test@example.com' })
    expect(email.address).toBe('test@example.com')
  })

  /**
   * Test case to verify that it does not create an email instance with an invalid email.
   * @function
   * @name shouldNotCreateEmailInstanceWithProvidedEmail
   */
  it('should not create a email instance with provided email', () => {
    expect(() => new Email({ address: 'invalid' })).toThrow(
      'Invalid Email Address',
    )
  })
})
