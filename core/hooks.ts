import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log('AutoTests started!');
});

test.afterEach(async ({ page }) => {
    console.log('AutoTests finished!');
});
