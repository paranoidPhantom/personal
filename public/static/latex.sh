cd public/static

curl -fsSL "https://raw.githubusercontent.com/DPDmancul/Apple-Emoji/refs/heads/master/apple_emoji.sty" -o "apple_emoji.sty"
mkdir -p "emoji"
curl -fsSL "https://raw.githubusercontent.com/DPDmancul/Apple-Emoji/refs/heads/master/emoji/2B50.png" -o "emoji/2B50.png"

echo "pdflatex resume.tex && pdflatex resume-en.tex" \
  | nix shell nixpkgs#texliveFull

rm -f "resume".bak* "resume-en".bak*
