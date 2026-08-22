curl -fsSL "https://raw.githubusercontent.com/DPDmancul/Apple-Emoji/refs/heads/master/apple_emoji.sty" -o "apple_emoji.sty"
mkdir -p "emoji"
curl -fsSL "https://raw.githubusercontent.com/DPDmancul/Apple-Emoji/refs/heads/master/emoji/2B50.png" -o "emoji/2B50.png"
texliveonfly resume.tex
texliveonfly resume-en.tex
rm -f "resume".bak* "resume-en".bak*
