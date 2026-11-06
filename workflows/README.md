# Auto TikTok Video Pipeline

n8n workflow: game news → TTS → ffmpeg merge → Drive → Zapier/Buffer → TikTok

## Import

1. Open n8n → **Workflows** → **Import from File**
2. Select `auto-tiktok-video-pipeline.json`

## Env vars

| Variable | Purpose |
|---|---|
| `GAME_NEWS_RSS_URL` | RSS feed ของข่าวเกม |
| `GOOGLE_SHEET_ID` | Sheet สำหรับเช็ค/บันทึกข่าวที่โพสต์แล้ว |
| `FASTAPI_BASE_URL` | API สำหรับ download + ffmpeg merge |
| `GOOGLE_DRIVE_FOLDER_ID` | โฟลเดอร์เก็บวิดีโอ |
| `ZAPIER_WEBHOOK_URL` | Zapier catch webhook |
| `BUFFER_OR_PUBLISH_WEBHOOK_URL` | Buffer / publish → TikTok |

## Flow

```
1 TRIGGER → 2 SCRAPE → 3 CHECK DB → 4 AI VOICE
         → 5 VIDEO → 6 MERGE → 7 UPLOAD → 8 ZAPIER → 9 PUBLISH
```

Google Sheet tab `posted` ควรมีคอลัมน์: `link`, `title`, `posted_at`, `drive_url`
