import { test, expect } from '@playwright/test';

test.describe('Flashcard App E2E', () => {
  test('Home page shows all navigation buttons', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /willkommen/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /study mode/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /quiz mode/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /stats page/i })).toBeVisible();
  });

  test('Category selection and navigation to Study Mode', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /study mode/i }).click();
    await expect(page.getByRole('heading', { name: /kategorie wählen/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /tiere/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /essen/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /verben/i })).toBeVisible();
    // Home-Button (Icon) vorhanden
    await expect(page.getByRole('button', { name: /home/i })).toBeVisible();
  });

  test('Study Mode: Flip card and navigate cards', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /study mode/i }).click();
    await page.getByRole('button', { name: /tiere/i }).click();
    await expect(page.getByRole('heading', { name: /study mode/i })).toBeVisible();
    // Fortschrittsanzeige
    await expect(page.getByText(/Karte 1 von/)).toBeVisible();
    // Karte zeigt spanischen Text
    const card = page.locator('div[style*="perspective"]');
    const frontText = await card.textContent();
    // Flip: englischer Text erscheint
    await card.click();
    // Warte auf Sichtbarkeit des englischen Textes auf der Rückseite
    await expect(page.getByTestId('flashcard-back')).toBeVisible();
    // Nächste Karte
    await page.getByRole('button', { name: /nächste karte/i }).click();
    await expect(page.getByText(/Karte 2 von/)).toBeVisible();
    // Zurück zur Kategorieauswahl
    await page.getByRole('button', { name: /zurück zur kategorieauswahl/i }).click();
    await expect(page.getByRole('heading', { name: /kategorie wählen/i })).toBeVisible();
  });

  test('Home-Button auf Kategorieauswahl funktioniert', async ({ page }) => {
    await page.goto('/study');
    await page.getByRole('button', { name: /home/i }).click();
    await expect(page.getByRole('heading', { name: /willkommen/i })).toBeVisible();
  });
}); 