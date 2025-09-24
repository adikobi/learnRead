import asyncio
from playwright.async_api import async_playwright, expect
import os

gameData = [
    { 'word': 'בַּנָּנָה', 'emoji': '🍌' }, { 'word': 'תַּפּוּחַ', 'emoji': '🍎' }, { 'word': 'כֶּלֶב', 'emoji': '🐶' },
    { 'word': 'חָתוּל', 'emoji': '🐱' }, { 'word': 'פִּיל', 'emoji': '🐘' }, { 'word': 'אַרְיֵה', 'emoji': '🦁' },
    { 'word': 'מְכוֹנִית', 'emoji': '🚗' }, { 'word': 'בַּיִת', 'emoji': '🏠' }, { 'word': 'שֶׁמֶשׁ', 'emoji': '☀️' },
    { 'word': 'כּוֹכָב', 'emoji': '⭐' }, { 'word': 'עוּגָה', 'emoji': '🎂' }, { 'word': 'פֶּרַח', 'emoji': '🌸' },
    { 'word': 'דָּג', 'emoji': '🐠' }, { 'word': 'כַּדּוּר', 'emoji': '⚽' }, { 'word': 'סֵפֶר', 'emoji': '📖' },
    { 'word': 'מַטּוֹס', 'emoji': '✈️' }, { 'word': 'גְּלִידָה', 'emoji': '🍦' }, { 'word': 'עֵץ', 'emoji': '🌳' },
    { 'word': 'פִּטְרִיָּה', 'emoji': '🍄' }, { 'word': 'פַּרְפַּר', 'emoji': '🦋' }, { 'word': 'צְפַרְדֵּעַ', 'emoji': '🐸' },
    { 'word': 'דְּבוֹרָה', 'emoji': '🐝' }, { 'word': 'פִּיצָה', 'emoji': '🍕' }, { 'word': 'רַכֶּבֶת', 'emoji': '🚆' },
    { 'word': 'מִטְרִיָּה', 'emoji': '☔' }, { 'word': 'אֲבַטִּיחַ', 'emoji': '🍉' }, { 'word': 'תּוּת', 'emoji': '🍓' },
    { 'word': 'עַגְבָנִיָּה', 'emoji': '🍅' }, { 'word': 'גֶּזֶר', 'emoji': '🥕' }, { 'word': 'קוֹף', 'emoji': '🐵' },
    { 'word': 'פָּרָה', 'emoji': '🐄' }, { 'word': 'תַּרְנְגוֹל', 'emoji': '🐔' }, { 'word': 'סוּס', 'emoji': '🐴' },
    { 'word': 'חַזִּיר', 'emoji': '🐷' }, { 'word': 'כִּבְשָׂה', 'emoji': '🐑' }, { 'word': 'אוֹפַנַּיִם', 'emoji': '🚲' },
    { 'word': 'סִירָה', 'emoji': '⛵' }, { 'word': 'טִיל', 'emoji': '🚀' }, { 'word': 'מַסּוֹק', 'emoji': '🚁' },
    { 'word': 'אַמְבּוּלַנְס', 'emoji': '🚑' }, { 'word': 'כַּבָּאִית', 'emoji': '🚒' }, { 'word': 'אַרְמוֹן', 'emoji': '🏰' },
    { 'word': 'עַיִן', 'emoji': '👁️' }, { 'word': 'לֵב', 'emoji': '❤️' }, { 'word': 'יָד', 'emoji': '✋' },
    { 'word': 'בָּלוֹן', 'emoji': '🎈' }, { 'word': 'מַתָּנָה', 'emoji': '🎁' }, { 'word': 'מַפְתֵּחַ', 'emoji': '🔑' },
    { 'word': 'פַּעֲמוֹן', 'emoji': '🔔' }, { 'word': 'שָׁעוֹן', 'emoji': '⏰' }, { 'word': 'שׁוּעָל', 'emoji': '🦊' },
    { 'word': 'פַּנְדָּה', 'emoji': '🐼' }, { 'word': 'דֹּב', 'emoji': '🐻' }, { 'word': 'זֶבְּרָה', 'emoji': '🦓' },
    { 'word': 'גִ\'ירָפָה', 'emoji': '🦒' }, { 'word': 'תַּנִּין', 'emoji': '🐊' }, { 'word': 'צָב', 'emoji': '🐢' },
    { 'word': 'לִוְיָתָן', 'emoji': '🐳' }, { 'word': 'דּוֹלְפִין', 'emoji': '🐬' }, { 'word': 'הַמְבּוּרְגֵּר', 'emoji': '🍔' },
    { 'word': 'צִ\'יפְּס', 'emoji': '🍟' }, { 'word': 'סֻפְגָּנִיָּה', 'emoji': '🍩' }, { 'word': 'עוּגִיָּה', 'emoji': '🍪' },
    { 'word': 'שׁוֹקוֹלָד', 'emoji': '🍫' }, { 'word': 'סֻכָּרִיָּה', 'emoji': '🍭' }, { 'word': 'פּוֹפְּקוֹרְן', 'emoji': '🍿' },
    { 'word': 'בֵּיצָה', 'emoji': '🥚' }, { 'word': 'לֶחֶם', 'emoji': '🍞' }, { 'word': 'חוּלְצָה', 'emoji': '👕' },
    { 'word': 'מִכְנָסַיִם', 'emoji': '👖' }, { 'word': 'שִׂמְלָה', 'emoji': '👗' }, { 'word': 'נַעַל', 'emoji': '👟' },
    { 'word': 'כּוֹבַע', 'emoji': '👒' }, { 'word': 'גֶּרֶב', 'emoji': '🧦' }, { 'word': 'כְּפָפָה', 'emoji': '🧤' },
    { 'word': 'צָעִיף', 'emoji': '🧣' }, { 'word': 'מִשְׁקָפַיִם', 'emoji': '👓' }, { 'word': 'כֶּתֶר', 'emoji': '👑' },
    { 'word': 'קֶשֶׁת', 'emoji': '🌈' }, { 'word': 'הַר גַּעַשׁ', 'emoji': '🌋' }, { 'word': 'גַּל', 'emoji': '🌊' },
    { 'word': 'יָרֵחַ', 'emoji': '🌙' }, { 'word': 'שֶׁלֶג', 'emoji': '❄️' }, { 'word': 'אֵשׁ', 'emoji': '🔥' },
    { 'word': 'טִפָּה', 'emoji': '💧' }, { 'word': 'רוּחַ', 'emoji': '💨' }, { 'word': 'בָּרָק', 'emoji': '⚡' },
    { 'word': 'סוּפָה', 'emoji': '🌪️' }, { 'word': 'גִּיטָרָה', 'emoji': '🎸' }, { 'word': 'פְּסַנְתֵּר', 'emoji': '🎹' },
    { 'word': 'חֲצוֹצְרָה', 'emoji': '🎺' }, { 'word': 'כִּנּוֹר', 'emoji': '🎻' }, { 'word': 'תֹּף', 'emoji': '🥁' },
    { 'word': 'טֶלֶפוֹן', 'emoji': '📱' }, { 'word': 'מַחְשֵׁב', 'emoji': '💻' }, { 'word': 'טֶלֶוִיזְיָה', 'emoji': '📺' },
    { 'word': 'נוּרָה', 'emoji': '💡' }, { 'word': 'יַהֲלוֹם', 'emoji': '💎' }, { 'word': 'רוֹבּוֹט', 'emoji': '🤖' }
]

def find_emoji_for_word(word_text):
    for item in gameData:
        if item['word'] == word_text:
            return item['emoji']
    return None

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={'width': 375, 'height': 667},
            is_mobile=True,
        )
        page = await context.new_page()

        file_path = os.path.abspath('index.html')
        await page.goto(f'file://{file_path}')

        # Start game
        await page.get_by_role('button', name='התחל משחק').click()
        await expect(page.locator('#word')).not_to_be_empty()

        options_container = page.locator('#options-container')

        # Dynamically find incorrect and correct emojis
        word_text = await page.locator('#word').text_content()
        correct_emoji = find_emoji_for_word(word_text)

        # Find an incorrect option
        incorrect_option_locator = options_container.locator('.option').filter(has_not_text=correct_emoji).first
        incorrect_emoji = await incorrect_option_locator.text_content()

        # 1. Click incorrect answer
        await incorrect_option_locator.click()
        await expect(options_container).to_have_class(r'.*no-hover.*')

        # 2. Wait for animation to finish and check that hover is re-enabled
        await page.wait_for_timeout(1000)
        await expect(options_container).not_to_have_class(r'.*no-hover.*')

        # 3. Click the correct answer to confirm functionality
        correct_option_locator = page.get_by_text(correct_emoji)
        await correct_option_locator.click()
        await expect(options_container).to_have_class(r'.*no-hover.*')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())