const guideContent = {
    "en": {
        "title": "JustScrollit V1.0",
        "subtitle": "Cinematic end credit rolls builder for After Effects.",
        "author": "By @rojusscripts. Created by Pedro Justiniano with a little hand from my friend Daian Gan and a huge help from Google Antigravity. Copyright © 2026 RojusScripts. All Rights Reserved.",
        "sections": [
            {
                "id": "description",
                "title": "1. Description.",
                "content": "JustScrollit is a simple but powerful tool for Adobe After Effects designed to easily build customizable animated credit rolls formatted in an industry standard layout for your film.\n\nYou can create your roll list from scratch, load a preset template or a simple text document containing your credit list to start editing it to fit your needs. Add pre-formatted lines, columns and images or video files, set a custom duration and generate a new compositon that you can later edit as you want, or export your list as a CSV file that you can edit outside After Effects in Excel or Apple Numbers and import it again.",
                "image": "JustScrollit full work space window panel.png"
            },
            {
                "id": "installation",
                "title": "1.1. Installation.",
                "content": "",
                "subsections": [
                    {
                        "title": "1.1.2. Aescripts Manager.",
                        "content": "The easiest way to install the JustScrollit script is by using the aescripts manager app. https://aescripts.com/learn/post/aescripts-aeplugins-manager-app\n\nIt can install, license and update all your tools in one click!"
                    },
                    {
                        "title": "1.1.3. Manual installation.",
                        "content": "Inside the JustScrollit folder there is the JustScrollit.jsxbin script file. To manually install it place the JustCrollit.jsxbin file at:\n\nMac:\n\n\"/Applications/Adobe After Effects (version)/Scripts/ScriptUI Panels/“\n\nWindows:\n\n\"C:Program Files/Adobe/Adobe After Effects (version)/Support\n\nFiles/Scripts/ScriptUI Panels/\"\n\n• Permissions.\n\nGo to After Effects>Settings>Scripting & Expressions and make sure that the Allow Scripts to Write Files and Access Network check box is toggled on.\n\n• Licensing.\n\nIn After Effects, open the JustScrollit panel window by going to Window and rolling all the way down until you find JustScrollit.jsxbin and it will pop up the licensing window. There you can enter the key provided after purchasing the product. If you don’t have it you can find your licenses at the “My Downloads & Licenses” section of your aescripts.com user account, or via the aescripts manager app. If you have it enter it and click ok. You can also run a 10 days trial version with some limitations: you can create scrolls limited to a 5 minutes duration and only in HD 1920x1080 or Reel 1080x1920."
                    }
                ]
            },
            {
                "id": "usage",
                "title": "2. How to use it.",
                "content": "In After Effects, open the JustScrollit panel window by going to Window and rolling all the way down until you find JustScrollit.jsxbin. Click on it and start working. You can also dock the panel wehere ever you want to fit in your workspace.\n\nYou can start from scratch by entering a name for you new credits roll and continue to add new lines, rows and colums typing the roles, names and other texts as you go, or you can import a text file containing the raw credit list to start formatting it in a cinematic layout. You can also load a recent file, load the starter template list to begin editing or import a previeously created CSV file.",
                "midImages": [
                    {
                        "afterParagraph": 1,
                        "src": "Entering a name example.png"
                    }
                ]
            },
            {
                "id": "import-csv",
                "title": "2.1. Import CSV.",
                "content": "Click on Import CSV to import a previously created file containing your list in the JustScrollit format, saved as a CSV file.\n\nMore on CSV files at section 3.4.",
                "image": "Import CSV button.png"
            },
            {
                "id": "smart-import",
                "title": "2.2. Smart Import.",
                "content": "Click on Smart Import to load a text file containing your raw list and the Smart Importer will try its best to identify and format your list the closest to a cinematic roll layout. Since this is not an AI solution it could not always translate some name sequences or text paragraphs to the propper layout you had in mind but once the list is created you can always edit it and re format it to fit your needs. More on reformat at section 2.6.3.\n\nWhen importing your raw credits list text file JustScrollit will analize it and give you a preview list reviewing the formats assigned to each line found and you can easily change the format of a line or group by selecting and replacing the format for the one you desire at the Change Format rolldown. More on formats at sections 2.6.1. and 2.6.2.\n\nYou can also teach Smart Import how to format specific words by adding new hints, clicking on Smart Settings. Here you can also add custom separators, which are interpreted as line breaks, by adding or removing special characters at the Custom Separators section. You can also access the Smart Settings window through the More Settings button at the section 3. (Output Settings).\n\nClick on Create list to add the imported text to the main JustScrollit list and perform further editings. You can also click on Append to End if you wish to place the imported text at the end of a current list.\n\nSmart Import can recognize a lot of basic industry standard roles and names in many languages, including English, Spanish, French, Italian, Portuguese, German, Dutch, Russian, Japanese, Chinese, Korean, Hindi and Catalan, but it can learn more as you add hints at Smart Settings.\n\nSmart Import supports only Plain Text files (.txt) or CSV files, so if your raw list was created in a MS-Word document, Excel sheet, PDF or any other type of file, you need to save it first as a plain text (.txt) or CSV file and then import it into JustScrollit.\n\nMS-Word files (.doc and .docx) import is available only for Mac users.",
                "image": "Smart Import button.png",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "Smart import preview window.png"
                    },
                    {
                        "afterParagraph": 3,
                        "src": "Smart import settings window.png"
                    }
                ]
            },
            {
                "id": "template",
                "title": "2.3. Template.",
                "content": "Click in Template to load a pre made credit list as starter to edit, replace and reformat lines and columns according to your needs.",
                "image": "Template button.png"
            },
            {
                "id": "restore",
                "title": "2.4. Restore.",
                "content": "Click on Restore to load the previous session and continue working on it.",
                "image": "Restore button.png"
            },
            {
                "id": "global-style",
                "title": "2.5. Global style.",
                "content": "Set the font style as you wish: Font face, Size, Tracking, Line Spacing, Color and check the All Caps box if you decide it. The default text color is set to a light almost white gray instead of pure white, to reduce contrast causing the flicker effect.  (More on flicker at section 3.3.)\n\nHere you can also change the alignment of a selected line or paragraph by clicking on one of the Align buttons to justify your text to the left, center or right.\n\nYou can change the style of single or multiple lines just by selecting them and performing your change, so if you wish to change the Global Style of your list make sure there is nothing selected by clicking esc on your keyboard.\n\nTracking and Line Spacing values are created once in your comp but if you wish to edit them later you just have to do it through the dedicated sliders at the Global Control layer in your comp.",
                "image": "Global style section example.png"
            },
            {
                "id": "create-lines",
                "title": "2.6. Create lines.",
                "content": "Use the create or insert lines buttons to add the different line format presets, rows and columns for your credit list, which you can later edit and sort the way you want at the list window below.\n\nMore on sorting on section 2.8.",
                "subsections": [
                    {
                        "title": "2.6.1 Single line creation buttons.",
                        "content": "[Role] (Center format) Creates a center-justified line text that you can use to define a role or whatever kind of title you want.\n\n[Name] (Center format) Creates a center-justified line text slightly bigger than the others, that you can use to enter a name or a group of names.",
                        "midImages": [
                            {
                                "afterParagraph": 2,
                                "src": "Role and name as rendered in comp example.png"
                            }
                        ]
                    },
                    {
                        "title": "2.6.2 Row / Column creation buttons.",
                        "content": "[2 Split] (Split column format) Creates a split line for entering a role and a name, justified to the left and right respectively, to build a beautiful side by side cast credits column.\n\n[R Col] (Single column format) Creates a single left-justified line text placed at the right side of the center to complement the 2 Split column with additional names without roles or for an extras credits column.\n\n[2 Col] (Double column format) Creates double left and right-justified texts row to build a double column array or a double paragraph layout.\n\n[3 Col] (Triple column format) Creates triple center-justified texts row to build a triple column array or a tripe paragraph layout.\n\n[4 Col] (Quadruple column format) Creates quaduple center-justified texts row to build four columns or a quadruple paragraph layout.\n\nRemember that you can always change the justification of your lines by selecting and clicking on one of the Align buttons at the Global Style section (2.5.).\n\n[Media] Lets you import and insert an image or video clip inside your roll. It will insert any kind of image or video supported by AE. You can change the scale of the media added but you wont be able to see it until the final composition is created. The media will be shown at the list only as a name.\n\n[Spacer] Creates a space at the bottom of the credit list or between lines.\n\nEvery new line, row or column is created as a line block at the end of your list, but if you want to insert one in a different place just select a line block and the new line, row or column will be inserted below that one.\n\nTo create columns just increase the number of lines at the Column Lines box  and then you can click on one of the column creation buttons. You can enter a maximum of 12 lines, and also can create multiple spaces by enabling the Multi Spacer checkbox. (If you want a column of more than 12 lines just click again, and again and… you get the idea).",
                        "midImages": [
                            {
                                "afterParagraph": 1,
                                "src": "2 Split example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 2,
                                "src": "R Col example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 3,
                                "src": "2 Col example as renderend in comp.png"
                            },
                            {
                                "afterParagraph": 4,
                                "src": "3 Col example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 5,
                                "src": "4 Col example as rendered in comp.png"
                            }
                        ]
                    },
                    {
                        "id": "reformat-mode",
                        "title": "2.6.3 Reformat Mode.",
                        "content": "You can easily change the layout of a line, group or an entire column by enabling the Reformat Mode check box and clicking in the desired button you want to change it to, so for example, if you want a column to be reformated to a single paragraph, select the lines conforming that column and, in Reformant Mode, click on Name or Role and it will transform to a center justified paragraph with the names separated by hypens (-). The hypen is the default separator but you can change it to any other special character at More Settings (3.1.).\n\nYou can create a double side by side column array by selecting a 2 split column and, in Reformat Mode, clicking on 2 Split, and it will transform in to two side by side separated columns. You can change it back by just clicking again on 2 Split.\n\nTo propperly reformat a line of multiple names to one of the multi text or column layouts, every name should be separated by one of the following characters: [,], [•], [/], [-] or [|].",
                        "image": "Reformat mode check box on.png",
                        "midImages": [
                            {
                                "afterParagraph": 1,
                                "src": "Centered paragraph example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 2,
                                "src": "Double 2 split example.png"
                            }
                        ]
                    }
                ],
                "image": "Create lines section.png"
            },
            {
                "id": "editing",
                "title": "2.7 Editing.",
                "content": "To edit the text of a line block simply select the block and a text box will appear below the list window, at the Editor section. Enter your desired text and hit return, enter or tab to update the selected line. When editing rows like 2 Split, 2 Col, 3 Col or 4 Col, just hit tab if you want to jump to the next text box or just hit return or enter if you want to finish editing.\n\nWhen a line or a group of line blocks are selected, the Global Style section switches to Line / Row Style or Block Style so you can change the font or any other parameter for idividual lines or colums.\n\n• The list window displays only the raw text, so you will not be able to see the actual roll’s look or any kind of style change until you create the composition. After the compositon is created you can always go back and perform any change you want.",
                "image": "Editing section.png",
                "midImages": [
                    {
                        "afterParagraph": 1,
                        "src": "Editor Role or Name text box.png"
                    }
                ]
            },
            {
                "id": "sorting",
                "title": "2.8 Sorting.",
                "content": "You can also re organize your lines with the buttons at the Sorting section by selecting a line or a group of lines and move them up or down, copy, cut and paste them where ever you want, delete lines and groups of lines, and of course, undo whatever mess you’ve just done. You can also take any selection and place it at the very top of your list by clicking on Prepend.\n\nThe standard kyboard shortcuts Cmd/Ctrl + c, Cmd/Ctrl + x, Cmd/Ctrl + v, Cmd/Ctrl z are also available of course, but you can only delete content from the list through the dedicated delete button [x].\n\n• To be able to make any kind of editing to a group of block lines you have to make sure they are contiguous, since it wont work if there is any unselected block inbetween.",
                "image": "Srorting section.png"
            },
            {
                "id": "searching",
                "title": "2.9. Searching.",
                "content": "If you need to find a specific name or text to edit it inside a crazy long list, just type it in the Search Text box, hit return or enter and it will pop up at the list window instantly. You can also jump to the next or previous result if the text you typed is repeated more than once.",
                "image": "Search Text box.png"
            },
            {
                "id": "output-settings",
                "title": "3. Output Settings.",
                "content": "Set the desired resolution to one of the preset formats listed: HD 16:9 (1920x1080), Vertical 9:16 (1080x1920), 4K UHD (3840 x 2160), DCI 2K (2048 x 1080) and DCI 4K (4096 x 2160). It is set to DCI 2K by default.\n\nSet the desired FPS to one fo the presets listed: 23.976, 24, 25, 29.97, 30, 50, 59.94, or 60. It is set to 24fps by default.\n\nThe default Duration of a new blank roll session is set to 10 seconds and it will increment automatically in two second for every three new blocks created, giving a base speed rate of 72 pixels per seconds to avoid flicker in your final render; but you can uncheck the Auto duration checkbox to enter any custom duration you want.\n\nCheck on Hold on final line if you wish the final line of your credits to stay in frame at the end of the roll, either for a disclaimer, creation date, a logo or any info you would need to show still at the end. It will add 15 extra seconds to the comp so that final line remains still on screen. For this to work properly you will have to add a  bunch of space (Spacer blocks) before the last line, so the layout makes sense at the end. This check box is unchecked by default so your credits will end off screen if you don’t touch it.",
                "image": "Output Settings section.png"
            },
            {
                "id": "more-settings",
                "title": "3.1. More settings.",
                "content": "When clicking on More Settings you will find some other checkboxes and options you can set.\n\nCheck on Reduce Flicker if you find your roll is causing visual edge-stutter (flicker) which often happens on 24 fps timelines if the texts lands on half-pixels. This setting avoids this to happen and ensure a perfect fluid movement.\n\nCheck on Enable Motion Blur if you find your roll’s animation needs a smoother motion look (It will significantly increases the render time).\n\nCheck on Solid Background if you need your background to be completely solid instead of the transparent default setting. It will create a pure black solid at the bottom of the comp.\n\nCheck on Title Safe Margins to force extremely long titles or custom 4 split columns to squish inwards instead of flying off the edge of the screen.\n\nCheck on Show Tool Tips if you want to enable or disable tool tips showed when hovering your mouse over the buttons.\n\nChange the Default Separator comma to any other character if you wish. This option works when you decide to reformat a column to a centered paragraph layout.\n\nClick on Clear Recent Projects if you want to clean up the Load recent rolldown. All your recent files will be then saved to a CSV Vault folder.\n\nClick on Smart Import Settings if you wish to add or remove hints and custom separators before importing a raw credit list text file.",
                "image": "More Settings window.png"
            },
            {
                "id": "scroll-it",
                "title": "3.2. Scroll it!.",
                "content": "At the bottom of the window there are the creation buttons which let you to create or export your roll list.\n\nWhen you are done editing your list and settings just hit Scroll it! and a new composition with the name, resolution, fps, and length you entered will be created. This comp will contain a number of text layers equivalent to the number of text blocks you had on your list, parented to an animated null object with in and an out positon keyframes.\n\nThere you’ll find also a Global Control layer provided with four sliders to add extra tweaking for the global size, tracking and line spacing of the roll list, and also a slider to shrink the duration if neccesary.\n\nYou can always re open the JustScrollit panel window to make changes to your roll comp and hit Update to make those changes effective. To edit a roll you’ve just created click on Restore or Load recent and it will load ready to edit and update.\n\nEvery time you hit Scroll it or Update, a new CSV file is created which you can access through the Load recent dropdown list at the top of the panel.\n\nWhen editing an existing list only by updating text, by correcting or replacing words, those changes will be updated live in your comp’s layers, so in this case clicking on Update won’t be necessary. But if you move, add or remove lines or columns you will need to Update your comp.\n\n• To Update a composition make sure that the composition is selected.\n\nClick on Export TXT if you need to edit your list outside After Effects in a simple text format, or just share it with a collaborator to do that dirty job for you, and re import it later via Smart Import.\n\nHit the Export CSV if you plan to edit the credit list in a spreadsheet software. To propperly handle CSV files refer to section 3.4.\n\nClick on Clear all if you wish to start a new blank and fresh roll from scratch.",
                "image": "Scroll it button.png",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "Composition layers example with Global Control layer selected.png"
                    }
                ]
            },
            {
                "id": "dealing-flicker",
                "title": "3.3. Dealing with flickery rolls.",
                "content": "Flicker, often called jitter, stutter, pulsing, or strobing, is one of the most common “issues” encoutered when rendering out a credits roll clip at about 24 fps (23.976 / 24 / 25) and it could be particularly annoying for the human eye.\n\nAuto duration is set to calculate the duration increase to always mantain a speed of 3 or 6 pixels per frame, depending of the selected resolution of your comp. This speed will grarantee you a virtually flicker-free roll render.\n\nHowever, if you still see flicker, you can reduce it by simply going to More Settings and check the Reduce Flicker check box, and it will add an expression to the master null that actively recalculates the position of you roll to avoid texts to land on half pixels (subpixel motion, also called jitter) ensuring a somooth motion. The subpixel motion (jitter) can also happen if you resize or re-time a pre rendered roll clip, so instead, resize your text or retime your roll animation before rendering.\n\nFor sharper eyes that insist they can still see some flicker, you can also check the Enable Motion Blur check box. It will trick the eye by adding a slight frame blending to reduce the contrast between the white texts over the black background, but do this assuming the risk to have a significantly longer render time. Although it works, this is the least recommended solution by professionals because it can affect the readability of the text.\n\nThere are some other moves you can make to improve the overall flicker feel like slowing down the animation and/or reducing the contrast by using a grayer shade of white instead of pure white, o lowering the white levels with an adjustment layer later.",
                "subsections": [
                    {
                        "title": "3.3.1 Why does flicker happens?",
                        "content": "Well, the thing is that, if its not about a frame rate mismatch, the flicker is actually a normal thing, and this is because a well known phenomena called “Retinal persistence” also called Persistence of vision, where images remain inprinted in the  retina for about a 20th of a second and is the biological characteristic that allows us to see the illusion of movement out of a sequence of still images changing rapidly. The faster the images change the more we get the illusion of movement, however, at about 24 frames per seconds the eye can still perceive that the images are remaining static for a 24th fraction of a second, causing the stroboscopic feel which get worst when we are only watching thin white characters moving up over a black screen because of the high contrast. At 30 fps is barely noticable and at 60 fps there is no flicker at all, it flows like water. Digital film made the problem even worse adding pixels to the equation and this is why the “Anti-subpixel motion expression” solution significantly improves the problem. Adding some frame blending with motion blur to the roll helps to blend the transition between pixels and effectively tricks the eye giving a more fluid illusion of movement, making it look like a 60fps sequence, therefore, this solution ends up being an aesthetic decision and it could result in less legible text if you add too much blur.\n\nSome other factors that could worsen the flicker feeling are the selection of fonts used in the roll, since thinner fonts can cause flickier rolls; also your monitor’s refresh rate could play against you because the common 60Hz rete doesn’t match well with 23.976 /24 / 25 frame rates, so is always healthy to review on professional monitors."
                    }
                ]
            },
            {
                "id": "auto-save",
                "title": "3.4. Heart attack proof auto save.",
                "content": "If you accidentally close the JustScrollit panel, don’t panic, you can just re open it and click on Restore and there it is, just as it was seconds before."
            },
            {
                "id": "csv-files",
                "title": "3.5. CSV files.",
                "content": "A CSV (Comma Separated Values) file is a plain text file that stores tabular data, such as spreadsheets or databases, in a simple, structured format. Each line represents a record (row), with fields (columns) separated by commas. It is widely used for importing/exporting data across different software tools, and is the file format accepted by Adobe After Effects.\n\nThe CSV files generated by JustScrollit are formated assigning the first column to define the type of line, and the next columns to the actual text of the credits list. You can, if you wish, start by loading the Template project, export it and edit it outside After Effects, import it again an then generate your scroll composition.\n\nIs recommended to edit CSV files in MS-Excel, Google Sheets or Apple Numbers, although you can edit them in any app capable to edit texts, such as MS-Word or even Text Edit but that is something you really don’t want to do, trust me.\n\nWhen editing CSV files in Excel you just have to edit and save them but in Apple Numbers you will have to export them sice Numbers always force the files to be saved in the .numbers format. In Google Sheets just download it selecting the .csv option.\n\nIf for some reason you decide to start your scroll list from scratch as a CSV file inside one of the recommended softwares you must make sure to save it as CSV UTF-8 (Comma delimited)(.csv) if you are saving it from Excel or export it as CSV, Unicode (UTF-8) if its from Numbers. In Google Sheets just remember to download it as a .csv file.\n\n• Remember you can create your raw credits list as al plain text file (.txt) without needing to add any code to define line formtas. Just write your list as you would usually do and Smart Import will format it for you.",
                "image": "Export CSV button.png",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "CSV TABLE SHEET EXAMPLE.png"
                    }
                ]
            },
            {
                "id": "raw-txt-tips",
                "title": "3.6. Tips to start from raw txt files.",
                "content": "You can create your raw credits list as al plain text file (.txt) without needing to add any code to define line formtas. Just write your list as you would usually do and Smart Import will format it for you, but there are some tips to have in account for better results.\n\nSmart import is not an AI solution but a kind of Smart Heuristic system that processes your text to format it into a beautiful, structured layout, based on the way is written and recognizing keywords, spaces and divider symbols.\n\nIt looks for common divider symbols like :, -, | or /, so f it finds a divider like those It splits the line into left and right parts.\n\nIf it spots a \"Role\" keyword (like Director, Producer, Music, Starring - which it knows in over 10 languages!) It formats them as two stacked Center blocks (the Role on top, and the Name below) for maximum polish.\n\nIf no role keyword is found It splits them side-by-side into a 2-Column Split (e.g. Role on the left, Name on the right).",
                "subsections": [
                    {
                        "title": "Remembering your rules.",
                        "content": "The system also checks the Smart Settings (Learning) to see if you have taught it anything in the past. If a line contains a word you manually corrected in a previous import (e.g., you once changed a specific keyword to a Title block), it remembers that preference and formats it the same way."
                    },
                    {
                        "title": "Reading \"Context & Casing\" (Capitalization & Length)",
                        "content": "If a line doesn't have any dividers or saved rules, the system makes a smart guess based on how the line is written:\n\nAll Caps & Short (e.g., \"PRODUCTION CREW\"): Proposes a Title/Header block.\n\nShort line following a Header: Proposes a Right Column block (since names usually follow roles).\n\nVery Long lines: It automatically splits the text into clean, wrapped Center blocks so they don't slide off the screen edges.\n\nI summary this is more or less the intuitive way people writes a credit list, but if you see that something is not being interpreted like you wish, you should follow this simple rules to get better results, although you can reformat any thing later."
                    }
                ]
            },
            {
                "id": "tricky-issues",
                "title": "4. DAFUQ (Directions to Answer Frequently Unanswered Questions).",
                "content": "• Always, and I mean, ALWAYS start bay adding a name to your roll, so if you accidentally close the panel or there is an unexpected crash, the script will have a name to autosave and restore your project.\n\n• If you wish to create your roll with the All Caps checkbox checked you have to make sure that there is no line selected in the list, checking that the Global Style section is not set to Block Style or Line / Row Style, because if there is any line selected then only that  line will render all caps. You can deselect lines by simply hitting on esc at your keyboard.\n\n• Remember, if you wish to change the Global Style of your list make sure there is nothing selected by clicking esc on your keyboard. I know I’ve already said that but is just a friendly reminder.\n\n• If at the Text properties panel of your AE project happens to be selected one or more of the faux styles buttons (like faux all caps, small caps, italic, etc) then text layers created will render with that style selected too. It's not a serious problem since, as the name faux suggests, they are fake styles and it's easily solved by selecting all the text layers on your comp and deselecting the faux style button or simply making sure there are no faux styles selected before running the JustScrollit script so you don’t have a stroke thinking all your text layers were created all caps when you just wrote them small. It's a little problem I haven't been able to solve yet, so we'll have to live with it for now.\n\n• Some special characters, like [•] [ç] [ñ] [`] and others may not translate correctly when CSV files are opened outside AE, but curiusly they are re translated correctly when imported back to JustScrollit, in some cases they don’t. Apple Numbers tend to be more respectful in this matter but, anyway, there is the info for it wont take you by surpise, so take care.\n\n•  If you perform some edits to an existing project and you accidentally close the panel without updating, then when restoring that session the live typing sync to your comp will be lost until you hit Update.\n\n• The larger your list, the longer will take JustScrollit to create or update your final compositon, as it will create a new text layer by every text line block you have in your list, and when updating it will have to re position every layer if you add, remove or reformat lines, so if you find the process is taking too long, this is completely normal so please be patient.\n\nIf you have any questions, comments, suggestions, words of love or contempt, feel free to hit me a DM on Instagram at @rojusscripts.\n\nBest regards, Pedro Justiniano. Enjoy!"
            }
        ]
    },
    "es": {
        "title": "JustScrollit V1.0",
        "subtitle": "Creador de créditos finales cinematográficos para After Effects.",
        "author": "Por @rojusscripts. Creado por Pedro Justiniano con una pequeña mano de mi amigo Daian Gan y una gran ayuda de Google Antigravity. Copyright © 2026 RojusScripts. Todos los derechos reservados.",
        "sections": [
            {
                "id": "description",
                "title": "1. Descripción.",
                "content": "JustScrollit es una herramienta sencilla pero potente para Adobe After Effects, diseñada para crear fácilmente créditos animados personalizables con un formato estándar de la industria para tu película.\n\nPuedes crear tu lista de créditos desde cero, cargar la plantilla predefinida o un documento de texto simple para editarla según tus necesidades. Agrega líneas o columnas preformateadas, imágenes o archivos de video, establece una duración personalizada y genera una nueva composición que podrás editar posteriormente. También puedes exportar tu lista como un archivo CSV para editarlo fuera de After Effects en Excel o Apple Numbers e importarlo de nuevo.",
                "image": "JustScrollit full work space window panel.png"
            },
            {
                "id": "installation",
                "title": "1.1. Instalación.",
                "content": "",
                "subsections": [
                    {
                        "title": "1.1.2. Administrador de aescripts (aescripts Manager.)",
                        "content": "La forma más sencilla de instalar el script JustScrollit es utilizando la aplicación aescripts Manager. https://aescripts.com/learn/post/aescripts-aeplugins-manager-app\n\n¡Puedes instalar, licenciar y actualizar todas tus herramientas con un solo clic!"
                    },
                    {
                        "title": "1.1.3. Instalación manual.",
                        "content": "Dentro de la carpeta de JustScrollit encontrarás el archivo llamado JustScrollit.jsxbin junto a al folder JustScrollit_Guide. Para instalarlo manualmente, copia todo el contenido de esta carpeta en:\n\nMac:\n\n\"/Aplicaciones/Adobe After Effects (versión)/Scripts/ScriptUI Panels/“\n\nWindows:\n\n\"C:Archivos de programa/Adobe/Adobe After Effects (versión)/Soporte\n\nArchivos/Scripts/ScriptUI Panels/“\n\n• Permisos.\n\nVe a After Effects>Settings>Scripting & Expressions y asegurate de marcar la casilla Allow Scripts to Write Files and Access Network.\n\n• Licenciamiento.\n\nEn After Effects, abre el panel de JustScrollit yendo a Windows y desplazándose hacia abajo hasta que encuentres JustScrollit.jsxbin. Aparecerá la ventana de licencias. Allí podrás introducir la clave que recibiste tras la compra. Si no la tienes, puedes encontrarla en la sección “My Downloads & Licenses” de tu cuenta de usuario de aescripts.com o a través de la aplicación aescripts Manager. Si ya la tienes, introdúcela y haz clic en Ok. Tambien puedes usar la versión de prueba de 10 días, con un limite de rollos de créditos de 5 minutos de duracíon y solo en HD 1920x1080 o Reel 1080x1920."
                    }
                ]
            },
            {
                "id": "usage",
                "title": "2. Cómo usarlo.",
                "content": "En After Effects, abre el panel de JustScrollit yendo a Archivo>Scripts (File>Scripts)  y desplazándote hacia abajo hasta que encuentres JustScrollit.jsxbin. Haz clic y empieza a trabajar.\n\nPuedes empezar desde cero introduciendo un nombre para los créditos y añadiendo líneas, filas y columnas a medida que avanzas, escribiendo los roles, nombres y demás. También puedes importar un archivo de texto con la lista de créditos original para darle formato cinematográfico. Otra opción es cargar un archivo reciente, usar la plantilla inicial para empezar a editar o importar un archivo CSV creado previamente.",
                "midImages": [
                    {
                        "afterParagraph": 1,
                        "src": "Entering a name example.png"
                    }
                ]
            },
            {
                "id": "import-csv",
                "title": "2.1. Importar CSV.",
                "content": "Haz clic en Import CSV para importar un archivo creado previamente que contenga tu lista en formato JustScrollit, guardado como archivo CSV.\n\nMás información sobre archivos CSV en la sección 3.4.",
                "image": "Import CSV button.png"
            },
            {
                "id": "smart-import",
                "title": "2.2. Importación inteligente (Smart Import).",
                "content": "Haz clic en Smart Import para cargar un archivo de texto que contenga tu lista original. El importador inteligente intentará identificar y formatear tu lista de la forma más parecida posible a un diseño de rollo cinematográfico. Dado que no se trata de una solución de IA, es posible que no siempre pueda traducir algunas secuencias de nombres o párrafos de texto al diseño correcto que tenías en mente, pero una vez creada la lista, siempre puedes editarla y reformatearla según tus necesidades. Más información sobre el reformateo en la sección 2.6.3.\n\nAl importar tu archivo de texto con la lista de créditos sin procesar, JustScrollit lo analizará y proporcionará una vista previa de la lista, revisando los formatos asignados a cada línea encontrada. Puedes cambiar fácilmente el formato de una línea o grupo seleccionando y reemplazando el formato deseado en el menú desplegable \"Cambiar formato\". Más información sobre formatos en las secciones  2.6.1. y 2.6.2.\n\nTambién puedes enseñarle a Smart Import cómo formatear palabras específicas agregando nuevas sugerencias (Hints) haciendo clic en Smat Settings. Aquí también puedes agregar separadores personalizados, que se interpretan como saltos de línea, agregando o eliminando caracteres especiales en la sección de Custom Separators. También puedes acceder a Smart Settings a través del botón de More Settings en el sección de Configuración de salida (Output settings) 3.\n\nHaz clic en Create list para agregar el texto importado a la lista principal de JustScrollit y realizar ediciones adicionales. También puedes hacer clic en Append to End si deseas colocar el texto importado al final de una lista existente.\n\nSmart Import puede reconocer una gran cantidad de roles y nombres  estándar de la industria en muchos idiomas, incluidos inglés, español, francés, italiano, portugués, alemán, holandés, ruso, japonés, chino, coreano, hindi y catalán, pero puede aprender más a medida que agregues sugerencias (Hints) en Smart Settings.\n\nLa función de importación inteligente solo admite archivos de texto sin formato (.txt) o archivos CSV, por lo que si tu lista original se creó en un documento de MS-Word, una hoja de cálculo de Excel, un PDF o cualquier otro tipo de archivo, primero debes guardarla como un archivo de texto sin formato (.txt) o CSV y luego importarla a JustScrollit.\n\nLa importación de archivos de MS-Word (.doc y .docx) solo está disponible para usuarios de Mac.",
                "image": "Smart Import button.png",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "Smart import preview window.png"
                    },
                    {
                        "afterParagraph": 3,
                        "src": "Smart import settings window.png"
                    }
                ]
            },
            {
                "id": "template",
                "title": "2.3. Plantilla (Template).",
                "content": "Haz clic en Template para cargar una lista de créditos predefinida como punto de partida. Edita, reemplaza y reformatea las líneas y columnas según tus necesidades.",
                "image": "Template button.png"
            },
            {
                "id": "restore",
                "title": "2.4. Restaurar (Restore).",
                "content": "Haz clic en Restore para cargar la sesión anterior y continuar trabajando en ella.",
                "image": "Restore button.png"
            },
            {
                "id": "global-style",
                "title": "2.5. Estilo global (Global style).",
                "content": "Establce el estilo de fuente como desees: Tipo de fuente, Tamaño, Espaciado entre caracteres, Interlineado, Color y marca la casilla All Caps si decides que quieres todo en mayúsculas. Aquí también puedes cambiar la alineación de una línea o párrafo seleccionado haciendo clic en uno de los botoncitos para alinear (Align) para justificar el texto a la izquierda, al centro o a la derecha.\n\nPuedes cambiar el estilo de líneas individuales o múltiples simplemente seleccionándolas y realizando el cambio, pero si deseas cambiar el estilo global de tu lista asegúrate de que no haya nada seleccionado presionando esc en tu teclado.\n\nEl Tracking y Line Spacing (espaciado entre caracteres y lineas) es creado una sola vez, pero si deseas editarlos luego solo necesitas hacerlo através de los controles deslizantes (Sliders) dedicados en el layer Global Control.",
                "image": "Global style section example.png"
            },
            {
                "id": "create-lines",
                "title": "2.6. Crear líneas.",
                "content": "Utiliza los botones de creación o inserción de líneas para agregar los diferentes formatos de línea, filas y columnas predefinidos a tu lista de créditos, que posteriormente podrás editar y re organizar como desees en la ventana de lista justo debajo.\n\nMás información sobre como re organizar en la sección 2.8. (Sorting).",
                "subsections": [
                    {
                        "title": "2.6.1. Botones para la creación de líneas individuales.",
                        "content": "[Role] (Formato central) Crea una línea de texto centrada que puedes usar para definir un rol o cualquier otro tipo de título que desees.\n\n[Nombre] (Formato central) Crea una línea de texto centrada, ligeramente más grande que las demás, que puedes usar para introducir un nombre o un grupo de nombres.",
                        "midImages": [
                            {
                                "afterParagraph": 2,
                                "src": "Role and name as rendered in comp example.png"
                            }
                        ]
                    },
                    {
                        "title": "2.6.2. Botones para crear filas/columnas.",
                        "content": "[2 Split] (Formato de columna dividida) Crea una línea dividida para introducir un rol y un nombre, justificados a la izquierda y a la derecha respectivamente, para crear una hermosa columna de créditos de reparto de esas que colocan los nombres de lado y lado.\n\n[R Col] (Formato de una sola columna) Crea una única línea de texto alineada a la izquierda, ubicada en el lado derecho del centro, para complementar la columna 2 Split con nombres adicionales sin roles o para una columna de créditos adicionales.\n\n[2 Col] (Formato de doble columna) Crea una doble fila de texto alineados izquierda y derecha para construir una matriz de doble columna o un diseño de doble párrafo.\n\n \n\n[3 Col] (Formato de triple columna) Crea una triple fila de texto centrado para construir una matriz de triple columna o un diseño de triple párrafo.\n\n[4 Col] (Formato de cuatro columnas) Crea cuatro filas de texto centradas para formar cuatro columnas o un diseño de párrafo cuádruple.\n\nRecuerda que siempre puedes cambiar la justificación de tus líneas seleccionando y haciendo clic en uno de los botones de alinear (Align) en la sección de Global Style. (2.5.).\n\n[Media] Te permite importar e insertar una imagen o un archivo de video en tu rollo. Puedes insertar cualquier tipo de imagen o vídeo compatible con After Effects. Puedes cambiar la escala de tu archivo añadido, pero no podrás verlo hasta que se cree la composición final. El contenido multimedia solo aparecerá en la lista por su nombre.\n\n[Spacer] Crea un espacio en la parte inferior de la lista de créditos o entre líneas.\n\nCada nueva línea, fila o columna se crea como un bloque de línea al final de tu lista, pero si deseas insertar una línea en un lugar diferente, simplemente selecciona un bloque de línea y la nueva línea, fila o columna se insertará debajo de esa.\n\nPara crear columnas, aumenta el número de líneas en la caja Column Lines  y luego haz clic en uno de los botones de creación de columnas. Puedes ingresar un máximo de 12 líneas y además puede crear múltiples espacios habilitando Multi Spacer. (Si deseas una columna de más de 12 líneas, simplemente haz clic de nuevo, y otra vez y… bueno eso, muchas veces).",
                        "midImages": [
                            {
                                "afterParagraph": 1,
                                "src": "2 Split example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 2,
                                "src": "R Col example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 3,
                                "src": "2 Col example as renderend in comp.png"
                            },
                            {
                                "afterParagraph": 5,
                                "src": "3 Col example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 6,
                                "src": "4 Col example as rendered in comp.png"
                            }
                        ]
                    },
                    {
                        "id": "reformat-mode",
                        "title": "2.6.3 Modo de reformateo (Reformat Mode).",
                        "content": "Puedes cambiar fácilmente el diseño de una línea, un grupo o una columna completa habilitando el Modo de reformateo (Reformat Mode) y haciendo clic en el botón deseado para cambiarlo. Por ejemplo, si deseas reformatear una columna a un solo párrafo, selecciona las líneas que la componen y, en el modo de reformateo, haz clic en Name o Rol. Se transformará en un párrafo centrado con los nombres separados por guiones (-). El guión es el separador por defecto pero puedes cambiarlo a cualquier otro caracter especial en la sección 3.1 More Settings.\n\nPuedes trambién crear un formato de doble columna dividida, seleccionando una columna dividida (2 split) y, en modo de reformateo (Reformat Mode) haz clic en 2 Split y ahora tu columna se transformará en dos columnas separadas en formato dividido. Puedes regresar a una sola columna haciendo clic nuevamente en 2 Split.\n\nPara reformatear correctamente una línea de múltiples nombres a uno de los diseños de texto múltiple o de columna, cada nombre debe estar separado por uno de los siguientes caracteres: [,], [•], [/], [-] o [|].",
                        "image": "Reformat mode check box on.png",
                        "midImages": [
                            {
                                "afterParagraph": 1,
                                "src": "Centered paragraph example as rendered in comp.png"
                            },
                            {
                                "afterParagraph": 2,
                                "src": "Double 2 split example.png"
                            }
                        ]
                    }
                ],
                "image": "Create lines section.png"
            },
            {
                "id": "editing",
                "title": "2.7 Edición.",
                "content": " \tPara editar el texto de un bloque de línea, simplemente selecciona el bloque y aparecerá un cuadro de texto debajo de la ventana de lista, en la sección Editor. Introduce el texto deseado y pulsa Intro (return), Enter o Tabulador para actualizar la línea seleccionada. Al editar filas como 2 Split, 2 Col, 3 Col o 4 Col, pulsa Tabulador para pasar al siguiente cuadro de texto o Intro o Enter para finalizar la edición.\n\nCuando se selecciona una línea o un grupo de bloques de línea, la sección Global Style cambia a Line / Row Style o Block Style. De esta forma, puedes cambiar la fuente o cualquier otro parámetro para líneas o columnas individuales.\n\n• La ventana de lista solo muestra el texto sin formato, por lo que no podrás ver el aspecto final del rollo ni ningún cambio de estilo hasta que crees la composición. Una vez creada la composición, siempre podrás volver atrás y realizar los cambios que desees.",
                "image": "Editing section.png",
                "midImages": [
                    {
                        "afterParagraph": 1,
                        "src": "Editor Role or Name text box.png"
                    }
                ]
            },
            {
                "id": "sorting",
                "title": "2.8 Re organizar (Sorting).",
                "content": "También puedes reorganizar tus líneas con los botones en la sección Sorting seleccionando una línea o un grupo de líneas y moviéndolas hacia arriba o hacia abajo, copiarlas, cortarlas y pegarlas donde quieras, eliminar líneas y grupos de líneas y, por supuesto, deshacer cualquier disparate que hayas hecho. También puedes tomar cualquier selección y colocarla en la parte superior de tu lista haciendo clic en Prepend.\n\nPor supuesto también están disponibles los atajos de toda la vida Cmd/Ctrl + c, Cmd/Ctrl + x, Cmd/Ctrl + v, Cmd/Ctrl + z, pero solo se puede borrar contenido de la lista através del botón [x].\n\n• Para poder editar un grupo de líneas de bloques, debes asegurarte de que sean contiguas, ya que no funcionará si hay algún bloque sin seleccionar entre ellas.",
                "image": "Srorting section.png"
            },
            {
                "id": "searching",
                "title": "2.9. Búsqueda (Search Text).",
                "content": "Si necesitas encontrar un nombre o texto específico para editarlo dentro de una lista larguísima, simplemente escríbelo en la caja de Search Text, pulsa Intro o Enter y aparecerá instantáneamente en la ventana de la lista. También puedes pasar al resultado siguiente o anterior si el texto que haz escrito se repite más de una vez.",
                "image": "Search Text box.png"
            },
            {
                "id": "output-settings",
                "title": "3. Configuración de salida (Output Settings).",
                "content": "Selecciona la resolución deseada entre los formatos preestablecidos: HD 16:9 (1920x1080), Vertical 9:16 (1080x1920), 4K UHD (3840 x 2160), DCI 2K (2048 x 1080) y DCI 4K (4096 x 2160). Por defecto, está configurado en DCI 2K.\n\nEstablece los fps (cuadros por segundo) deseados en uno de los preajustes que se muestran: 23.976, 24, 25, 29.97, 30, 50, 59.94 o 60. Está configurado en 24 fps por defecto.\n\nLa duración de una nueva sesión de rollo en blanco está predeterminada a 10 segundos y se incrementará automáticamente en dos segundos por cada tres nuevos bloques creados, lo que da una velocidad base de 72 píxeles por segundo, para evitar esas letricas temblorosas en tu render final; pero puedes desmarcar la casilla Auto para introducir cualquier duración que desees.\n\nMarca la casilla Hold on final line si deseas que la última línea de tus créditos permanezca visible al final del rollo, ya sea para un aviso legal, la fecha de creación, un logotipo o cualquier otra información que necesites mostrar al final; esto añade 15 segundos adicionales a la composición para que esa línea final permanezca en pantalla. Para que esto funcione correctamente, tendrás que añadir varios espacios (Spacers) antes de la última línea, de modo que el diseño tenga sentido al final. Esta casilla está desactivada por defecto, por lo que tus créditos terminarán fuera de pantalla si no la tocas.",
                "image": "Output Settings section.png"
            },
            {
                "id": "more-settings",
                "title": "3.1. Más ajustes (More settings).",
                "content": "Al hacer clic en More Settings encontrarás otras casillas de verificación y opciones que puedes configurar.\n\nMarca la casilla Reduce Flicker si notas que tu animación se ve estroboscópica, algo frecuente en televisores o secuencias de vídeo de 24 fps si los textos caen en la mitad de los píxeles; esta configuración evita este problema y garantiza un movimiento perfectamente fluido.\n\nMarca la casilla Enable Motion Blur si consideras que la animación de tu rollo necesita verse aún más fluida, pero ten en cuenta que esto puede incrementar por mucho el tiempo del render final.\n\nMarca la casilla Solid Background si necesitas que el fondo sea completamente sólido en lugar de la configuración transparente predeterminada. Se creará un layer sólido negro puro en la parte inferior de la composición.\n\nMarca la casilla Title Safe Margins para forzar que los títulos extremadamente largos o diseños de 4 columnas se compriman hacia adentro en lugar de salirse del borde de la pantalla.\n\nMarca la casilla Show Tool Tips si desea activar o desactivar las sugerencias que se muestran al pasar el ratón por encima de los botones.\n\nTambién puedes cambiar la coma que está como separador por defecto en Default Separator, por cualquier otro caracter especial que desees. Esta es una opción disponible para cuando decides reformatear una columna a párrafos centrados.\n\nHaz clic en Clear Recent Projects si quieres limpiar la ventanita desplegable de Load recent. Todos tus archivos recientes se guardarán en una carpeta llamada CSV Vault.\n\nHaz clic en Smart Import Settings si deseas agregar o eliminar sugerencias  (Hints) y separadores personalizados antes de importar un archivo de texto de una lista de créditos sin procesar.",
                "image": "More Settings window.png"
            },
            {
                "id": "scroll-it",
                "title": "3.2. Scroll it!",
                "content": "En la parte inferior del panel se encuentran los botones de creación que te permiten crear o exportar tu rollo de créditos.\n\nCuando hayas terminado de editar tu lista y ajustado tus configuraciones, haz clic en Scroll it! y se creará una nueva composición con el nombre, la resolución, los fotogramas por segundo y la duración que hayas introducido. Esta composición contendrá varias capas de texto equivalentes al número de bloques de texto que tenías en tu lista, enlazadas a un objeto null animado con fotogramas clave de entrada y salida.\n\nAllí también encontrarás una capa llamada Global Control provista de cuatro controles deslizantes para añadir ajustes adicionales al tamaño global, el espaciado entre líneas y el interlineado de tu rollo, y también un control para reducir la duración si fuera necesario.\n\nSiempre puedes volver a abrir el panel de JustScrollit para realizar cambios en tu rollo y pulsar Update para que esos cambios sean efectivos en la composición. Para editar un rollo que acabas de crear, haz clic en Restore o Load recent y se cargará listo para editar y actualizar. Cada vez que pulsas Scroll it! o Update, se crea un nuevo archivo CSV al que puedes acceder a través de la lista desplegable de Load recent en la parte superior del panel.\n\nSi estás editando un proyecto existente y solo estás corrigiendo textos, esos cambios se reflejarán en vivo en tu composición, así que en este caso no será necesario pulsar Update; pero si mueves, añades o quitas lineas o columnas a tu lista entonces si necesitarás actualizar pulsando Update para que esos cambios se hagan efectivos en la composición.\n\n• Para actualizar una composición, asegúrate de que dicha composición esté seleccionada, aunque igual si no lo está te lo van a avisar.\n\nHaz clic en Export TXT si necesitas editar tu lista fuera de After Effects en un formato de texto simple, o compartirla con un colaborador para que haga el trabajo sucio por tí, y volver a importarla más tarde via Smart Import.\n\nHaz clic en Export CSV si planeas editar tu lista de créditos en una aplicación de hojas de cálculo. Para manejar correctamente los archivos CSV, consulta la sección 3.4.\n\nHaz clic en Clear All si deseas comenzar un rollo nuevecito y en blanco desde cero.",
                "image": "Scroll it button.png",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "Composition layers example with Global Control layer selected.png"
                    }
                ]
            },
            {
                "id": "dealing-flicker",
                "title": "3.3. Lidiando con rollos parpadeantes (Flicker).",
                "content": "El rollo tembloroso o estroboscópico, que a veces llaman flicker, jitter, stutter, o pulsing es uno de los problemas más comunes encontrados al renderizar rollos de crédios a 24 fps (23.976 / 24 / 25) y puede ser algo a veces bastante molesto para el ojo humano.\n\nEl modo de Auto duración está hecho para incrementar la duración manteniendo una velocidad de 3 o 6 píxeles por cuadro, dependiendo de la resolución seleccionada. Esta velocidad garantiza que tu rollo salga prácticamente sin temblores raros.\n\nSin embargo, si todavía puedes ver algo de tembladera, puedes reducirla yendo a More Settings y marcando la casilla Reduce Flicker, lo que añadirá una expresión al master null que recalculará la posición de tu rollo por cada cuadro para evitar que los textos caigan en la mitad de los píxeles, lo que llaman movimiento subpíxel, y asegurando una animación más suave. Este movimiento subpíxel también podría ocurrir si agrandas o cambias el tiempo de un clip pre renderizado, así que si es necesario preferiblemente haz esto antes de renderizar.\n\nPara esas personas de visión super dotada que insisten en que todavía pueden ver algo de temblor en el rollo también puedes marcar la casilla Enable Motion Blur, lo que engañará al ojo suavizando un poco el alto contraste entre las letras y el fondo, pero si lo vas a hacer debes asumir el riesgo de que el tiempo de render se alargará significativamente. Aunque esta solución funciona es la menos recomendada por profesionales pues puede afectar la legibilidad del texto.\n\nHay otros truquitos que podrías aplicar para mejorar la sensación de temblor, como relentizar la animación o trambién reducir el contraste utilizando un blanco menos blanco para las letras, o disminuyendo el nivenl de blancos con una capa de ajustes más adelante.",
                "subsections": [
                    {
                        "title": "3.3.1. ¿Por qué parpadean los rollos?",
                        "content": "Bueno, la cosa es que, cuando no se trata de algún error de cuadros por segundo entre el clip y la composición, el efecto tembloroso o estroboscópico es algo normal, y es debido a un fenómeno muy conocido llamado “Persistencia retiniana”, que es el efecto por el cual las imágenes permanecen impresas en la retina por un tiempo aproximado de una 20va fracción de segundo, lo cual es la característica biológica que nos permite ver la ilusión de movimiento a partir de una secuencia rápida de imágenes. Mientras más rápido cambian las imágenes más fluida es la ilusión de movimiento, sin embargo, a 24 cuadros por segundo el ojo aún es capaz de percibir que las imágenes se mantienen estáticas por esa 24va fracción de segundo, causando esa sensacón estroboscópica que se pone peor si se trata de letritas blancas finitas moviendose sobre un fondo negro. A 30 cuadros por segundo a penas se nota el efecto y a 60 cuadros no hay nada de estroboscopía. todo fluye como el agua. El cine digital vino a empeorar el asunto añadieno píxeles a la ecuación y es por eso que la expresión anti subpíxeles mejora el probema significativamente. Añadiendo algo de motion blur también engaña al ojo dando una ilusión de movimiento más fluido, haciendo que una secuencia de 24 parezca de 60, pero es una solución que termina siendo una desición estética pues mucho blur puede disminuir la legibilidad de los textos.\n\nHay otros factores que podrían empeorar el temblor como es la selección del tipo de letra, ya que letras más finas se ven más temblorosas; también la frecuencia del monitor podría ser contraproducente ya que los 60Hz (que es la más usual en monitores de uso doméstico) no encaha bien con velocidades de 23.976 / 24 /25 cuadros por segundo, así que siempre será más saludable visualizar en monitores profesionales con frecuencias mayores de 70Hz/"
                    }
                ]
            },
            {
                "id": "auto-save",
                "title": "3.4. Guardado automático a prueba de ataques cardíacos.",
                "content": "Si cierras accidentalmente el panel JustScrollit, no te preocupes, puedes volver a abrirlo y hacer clic en Restore y ahí está, tal como estaba segundos antes.",
                "image": "Export CSV button.png"
            },
            {
                "id": "csv-files",
                "title": "3.5. Archivos CSV.",
                "content": " \tUn archivo CSV (valores separados por comas) es un archivo de texto plano que almacena datos tabulares, como hojas de cálculo o bases de datos, en un formato simple y estructurado. Cada línea representa un registro (fila), con los campos (columnas) separados por comas. Se utiliza ampliamente para importar y exportar datos entre diferentes programas y es el formato de archivo aceptado por Adobe After Effects.\n\nLos archivos CSV generados por JustScrollit están formateados asignando la primera columna para definir el tipo de línea y las siguientes columnas al texto real de la lista de créditos. Si lo deseas, comienza cargando el proyecto plantilla (Template), expórtalo y edítalo fuera de After Effects, impórtalo de nuevo y luego genera tu composición.\n\nSe recomienda editar los archivos CSV en MS-Excel, Google Sheets o Apple Numbers, aunque también se pueden editar en cualquier aplicación capaz de editar textos, como MS-Word o incluso TextEdit, pero créeme, eso es algo que realmente no querrás hacer. Es… no, no lo hagas.\n\nCuando editas archivos CSV en Excel, solo tienes que guardarlos y ya, pero en Apple Numbers tendrás que exportarlos, ya que Numbers siempre obliga a que los archivos se guarden en el formato .numbers. En Google Sheets solo le das a descargar y buscas la opción .csv.\n\nSi por alguna razón decides comenzar tu lista de crétidos desde cero como un archivo CSV dentro de uno de los programas recomendados, debes asegurarte de guardarlo como CSV UTF-8 (delimitado por comas) (.csv) si lo estás guardando desde Excel o exportarlo como CSV, Unicode (UTF-8) si es desde Numbers o descargarlo como .csv desde Google Sheets.\n\n• Recuerda que puedes crear tu lista de créditos como un archivo de texto plano (.txt) sin la necesidad de añadirle ningun código para definir formatos. Solo escribe tu lista como te salga y Smart Import se encargará de interpretarla y formatearla.",
                "midImages": [
                    {
                        "afterParagraph": 2,
                        "src": "CSV TABLE SHEET EXAMPLE.png"
                    }
                ]
            },
            {
                "id": "raw-txt-tips",
                "title": "3.6 Consejos para empezar con archivos .txt sin formato.",
                "content": "Puedes crear tu lista de créditos a partir de un archivo de texto plano (.txt) sin necesidad de añadir ningún código exótico para definir el formato de las líneas. Simplemente escribe tu lista como lo harías normalmente y Smart Import la formateará automáticamente. Sin embargo, hay algunos consejos que debes tener en cuenta para obtener mejores resultados.\n\nSmart Import no es una solución de IA, sino un sistema heurístico inteligente que procesa tu texto para formatearlo en un diseño estructurado y atractivo, basándose en la forma en que está escrito y reconociendo palabras clave, espacios y separadores.\n\nBusca separadores comunes como :, -, | o /. Si encuentra uno de estos separadores, divide la línea en dos partes: izquierda y derecha.\n\nSi detecta una palabra clave de \"Rol\" (como Director, Productor, Música, Protagonista, ¡que reconoce en más de 10 idiomas!), la formatea como dos bloques centrales apilados (el Rol arriba y el Nombre abajo) para una presentación impecable.\n\nSi no encuentra ninguna palabra clave de rol, las divide en dos columnas (por ejemplo, Rol a la izquierda, Nombre a la derecha).",
                "subsections": [
                    {
                        "title": "Recuerda tus reglas.",
                        "content": "El sistema también revisa la configuración del Smart Settings (Learning) para ver si le has enseñado algo anteriormente. Si una línea contiene una palabra que corregiste manualmente en una importación anterior (por ejemplo, si cambiaste una palabra clave específica a un bloque de título), el sistema recuerda esa preferencia y la forma de la misma manera."
                    },
                    {
                        "title": "Lectura de \"Contexto y mayúsculas\" (Mayúsculas y longitud).",
                        "content": "Si una línea no tiene separadores ni reglas guardadas, el sistema realiza una suposición inteligente según cómo esté escrita:\n\n• Todo en mayúsculas y corto (p. ej., \"EQUIPO DE PRODUCCIÓN\"): Sugiere un bloque de título/encabezado.\n\n• Línea corta después de un encabezado: Sugiere un bloque de columna derecha (ya que los nombres suelen seguir a los roles).\n\n• Líneas muy largas: Divide automáticamente el texto en bloques centrados limpios y ajustados para que no se salgan de los bordes de la pantalla.\n\nEn resumen, esta es la forma más intuitiva en que se escribe una lista de créditos, pero si observas que algo no se interpreta como deseas, sigue estas sencillas reglas para obtener mejores resultados, aunque igual puedes reformatearlo posteriormente."
                    }
                ]
            },
            {
                "id": "tricky-issues",
                "title": "4. Un par cosillas para tener en cuenta.",
                "content": "• Siempre, repito, SIEMPRE, comienza poniéndole un nombre a tu rollo, de modo que si se cierra accidentalmente el panel o hay un fallo inesperado, el script tendrá un nombre para guardar automáticamente y restaurar tu proyecto.\n\n• Si deseas crear tu rollo completo con la casilla de Mayúsculas marcada (All Caps), debes asegurarte de que no haya ninguna línea seleccionada en la lista, comprobando que la sección Global Style no diga Block Style o Line / Row Style, porque si hay alguna línea seleccionada, solo esa línea se mostrará en mayúsculas. Puedes deseleccionar líneas simplemente haciendo clic en esc en tu teclado.\n\n• Si deseas cambiar el estilo global asegúrate de que no haya nada seleccionado en tu lista haciendo clic en esc en tu teclado. Sé que ya lo dije, pero es para que no se te valla a olvidar.\n\n• Si en el panel de propiedades de texto de tu proyecto AE esta seleccionado uno de los estilos falsos (faux styles) como mayúsculas falsas, versalitas (mayúsculas reducidas), cursiva, etc, las capas de texto creadas se renderizarán también con ese estilo seleccionado. No es un problema grave, ya que, como su nombre indica, son estilos falsos y se soluciona fácilmente seleccionando todas las capas de texto de la composición y desmarcando el botón de estilo falso, o simplemente asegurándote de que no haya ningún estilo falso seleccionado antes de ejecutar el script JustScrollit para evitar que te de un derrame al pensar que todas las capas de texto se crearon en mayúsculas cuando en realidad las escribiste en en minúsculas y así. Es un pequeño problema que aún no he podido resolver, así que tendremos que convivir con eso por ahora.\n\n• Algunos caracteres especiales, como [•], [ç], [ñ], [`] y otros, podrían no traducirse correctamente al abrir archivos CSV fuera de After Effects, pero curiosamente se traducen correctamente al importarlos de nuevo a JustScrollit; en algunos casos, no. Apple Numbers suele ser más respetuoso en este aspecto, pero, en cualquier caso, ahí está la información para que no te tome por sorpresa.\n\n• Si ejecutas alguna edición a un proyecto existente y accidentalmente cierras el panel sin antes haber actualizado la composición pulsando Update, cuando restaures la sesión, la capacidad de editar textos en vivo en la composicón ya no estará disponible hasta que no hayas actualizado la composición.\n\n• Cuanto más larga sea tu lista, más tiempo tardará JustScrollit en crear o actualizar la composición final, ya que creará una nueva capa de texto por cada bloque de línea de texto que tengas en tu lista, y al actualizar tendría que reposicionar cada capa si añades, quitas o reformateas lineas, entonces si encuentras que el proceso está tomando demasiado tiempo esto es completamente normal, así que por favor ten paciencia.\n\nSi tienes alguna pregunta, comentario, sugerencia, palabras de amor o desprecio, no dudes en enviarme un mensaje directo en Instagram a @rojusscripts.\n\nUn cordial saludo, Pedro Justiniano. ¡Que lo disfrutes!"
            }
        ]
    }
};
