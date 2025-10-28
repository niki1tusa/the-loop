#!/bin/sh
echo "🪝 Установка git-хуков..."
cp scripts/git-hooks/* .git/hooks/
chmod +x .git/hooks/*
echo "✅ Хуки установлены!"
