const originalToggleEmoji = toggleEmoji;

toggleEmoji = function() {
  originalToggleEmoji();
  if (emojis !== null && emojis.custom === undefined) {
    emojis.custom = [
      {
        "emoji": "🌺‍🔴",
        "description": "red hibiscus",
        "aliases": [ "red_hibiscus" ],
        "tags": []
      },
      {
        "emoji": "🍇‍🟢",
        "description": "green grape",
        "aliases": [ "green_grape" ],
        "tags": []
      }
        "emoji": "🍦‍🌿",
        "description": "mint ice cream",
        "aliases": [ "mint_icecream" ],
        "tags": []
      }
        "emoji": "🍦‍🍓",
        "description": "strawberry ice cream",
        "aliases": [ "strawberry_icecream" ],
        "tags": []
      }
        "emoji": "🍦‍🍫",
        "description": "chocolate ice cream",
        "aliases": [ "chocolate_icecream" ],
        "tags": []
      }
        "emoji": "🎂‍🌿",
        "description": "mint cake",
        "aliases": [ "mint_cake" ],
        "tags": []
      }
        "emoji": "🎂‍🍓",
        "description": "strawberry cake",
        "aliases": [ "strawberry_cake" ],
        "tags": []
      }
        "emoji": "🎂‍🍫",
        "description": "chocolate cake",
        "aliases": [ "chocolate_cake" ],
        "tags": []
      }
    ];
  }
};

var newButton = document.createElement("button");
newButton.classList.toggle("tablink");
newButton.innerHTML = `🐱‍👤`;
newButton.onclick = () => { emojiCategory('custom', newButton); };
document.getElementById("emoji_category").append(newButton);
