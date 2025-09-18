// pages/LoginPage.ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/base.page';

/**
 * Simple static test data solution
 */
export class TestDataForLoginTest extends BasePage {
    // Correct values
    static readonly usernameCorrect = 'zephyrkyrandia@outlook.com';
    static readonly passwordCorrect = 'Zoldfoki1!';
    // Incorrect values
    static readonly usernameIncorrect = 'WRONGzephyrkyrandia@outlook.com';
    static readonly passwordIncorrect = 'WRONGZoldfoki1!';
}
