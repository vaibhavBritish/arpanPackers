const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

/**
 * Send a row of data to Google Sheets via Apps Script webhook.
 * @param {string} sheetName - The name of the sheet target
 * @param {object} data - The row data to send
 * @returns {Promise<boolean>} - True if successful
 */
export async function sendToGoogleSheets(sheetName, data) {
  if (!SHEETS_WEBHOOK_URL || SHEETS_WEBHOOK_URL.includes("YOUR_ID")) {
    console.warn(`⚠️ GOOGLE_SHEETS_WEBHOOK_URL not configured. Data for [${sheetName}] will not be synced.`);
    return false;
  }

  try {
    const payload = {
      sheet: sheetName,
      data: {
        ...data,
        timestamp: new Date().toISOString(),
      }
    };

    const response = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const name = data.name || data.full_name || "Unknown";
      console.log(`✅ [${sheetName}] Row added to Google Sheets for: ${name}`);
      return true;
    } else {
      const errorText = await response.text();
      console.error(`❌ Google Sheets Webhook Error (${response.status}):`, errorText);
      return false;
    }
  } catch (error) {
    console.error(`❌ Network error while syncing to Google Sheets:`, error.message);
    return false;
  }
}
