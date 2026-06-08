/* ============================================================================
   UNOFFICIAL PARALIVES MODDING COMMUNITY WIKI
   ----------------------------------------------------------------------------
   *** THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE. ***

   ----------------------------------------------------------------------------
   5 GOLDEN RULES (please read once — they prevent 99% of mistakes)
   ----------------------------------------------------------------------------
   1. Every piece of text must sit inside "double quotes".
   2. Every entry must end with a comma  ,  (just like the ones already here).
   3. Keep the curly braces { } and square brackets [ ] exactly as they are.
   4. To put a link inside text, just type the full https://... address.
   5. After editing, SAVE the file and push the update to see changes.

   TIP: The easiest and safest way to add something new is to COPY an entry
   that already exists, paste it right below, and change the words inside the
   quotes. Each section has a "HOW TO ADD" example to copy from.
   ============================================================================ */

window.WIKI_CONTENT = {

  /* ==========================================================================
     1) GAME VERSION  —  Just change the text inside the quotes whenever the game updates.
     ========================================================================== */
  game: {
    version: "Early Access 0.1.2b.19972",   // current game version
    patchDate: "May 29, 2026"               // date of the latest patch
  },

  /* ==========================================================================
     2) MESH COUNT  —  Only needs a change if there is a update with new items.
     ========================================================================== */
  meshCount: 4105,

  /* ==========================================================================
     SIDEBAR MENU (THE TABS)  —  controls the list of pages in the left
     sidebar: their order, their wording, and which icon they show.

     Each tab looks like this:

         { href: "mods.html", label: "Mod Compatibility", icon: "mods", group: "Wiki" },

       href  = the page file the tab opens (must be a real .html file).
       label = the wording shown in the sidebar.
       icon  = the little picture. Pick ONE of these names:
               home, qa, res, tips, mesh, test, mods, about
       group = optional small grey heading shown ABOVE this tab
               (only put it on the FIRST tab of a group). Leave it off the rest.

     TO REORDER THE TABS: just move the lines up or down.
     TO RENAME A TAB: change the words inside its "label".
     TO ADD A WHOLE NEW PAGE: that needs a new .html file made once — ask me.
     ========================================================================== */
  navigation: [
    { href: "index.html",     label: "Home",                 icon: "home", group: "Wiki" },
    { href: "questions.html", label: "Questions & Answers",   icon: "qa" },
    { href: "resources.html", label: "Resources & Tools",     icon: "res" },
    { href: "tips.html",      label: "Info & Tips",           icon: "tips" },
    { href: "mods.html",      label: "Mods",                  icon: "mods" },
    { href: "mesh-stats.html",label: "Mesh Statistics",       icon: "mesh", group: "Reference" },
    { href: "testing.html",   label: "Testing & Findings",    icon: "test" },
    { href: "about.html",     label: "About & Credits",       icon: "about", group: "More" }
  ],

  /* ==========================================================================
     3) QUESTIONS & ANSWERS  —  shown on the "Questions & Answers" page.

     Each entry looks like this (Leave it like this -> "" <- if unused):

         {
           question: "The question people ask",
           answer:   "The answer. Leave as \"\" if it is still unanswered.",
           link:     "",   // optional https://... a button will link to
           alsoNote: "",   // optional extra note shown in a dashed box
           alsoLink: "",   // optional https://... for that extra note
           image:    ""    // optional, advanced — see the note at the bottom
         },

     HOW TO ADD A NEW QUESTION: copy the block above, paste it below as the
     first item. Leaving "answer" empty marks it "open".
     ========================================================================== */
  questions: [
    {
      question: "Where to get the body template files?",
      answer:   "Adding Custom Textures for the Paramaker - Paralives Wiki",
      link:     "https://paralives.wiki.gg/wiki/Adding_Custom_Textures_for_the_Paramaker",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "My mesh is invisible in prefab, what are some common ways I can troubleshoot?",
      answer:   "Turn your mod on then off again to reload the assets or quit and relaunch game, also check the face orientation to make sure there's no errors\nCheck if your scale is correct and is not too small to be seen",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "My colour map/zone isn't working, why can't I recolour the texture/only recolour one part?",
      answer:   "You need to add the the same number of surfaces as your colour zone colors then in the value of the surfaces item, you need to put a surface either from the game or your own",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "My tattoos are considered out of bounds, how do I fix this?",
      answer:   "Probably a bug: The positions set in the Control Panel do not translate 1:1 to what is shown in the Paramaker. You will need to eyeball the final placement.\n\nTips by Body Part:\n\nLeft/Right Arm: The preset values listed on the wiki page work well as a starting point.\n(Left: (907 / 1445); Right: (130 / 1445)\nBack: Use the coordinates (675 / 1420) in the Control Panel to center your tattoo by default. Adjust from there as needed.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "What are some good programs to get started in making custom content?",
      answer:   "For a 3D software, Blender is a free software to use \nFor texturing, you can use any image editing software as long as you save the file type as PNG",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Where can I access the official Paralives modding tutorials?",
      answer:   "https://paralives.wiki.gg/wiki/Category:Modding_guides",
      link:     "https://paralives.wiki.gg/wiki/Portal:Modding_guides",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Is it possible to recolor specific components of the UI?",
      answer:   "Icons for buttons, emotions, status effects, and names of tabs(?) and can be changed through control panel. Fonts (with script modding) can be modified.  As of right now, position of elements in the UI and font colour can't be changed",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "The search option in the modding tools does not show the files I put in my modding folder, why?",
      answer:   "Turn your mod on then off again to reload the assets or quit and relaunch game. (For Mac users: The in-game explorer folder does not work. Mod files are availble under the search CMD + Shift + G, then ~/Library/ApplicationSupport/com.paralives.paralives. Double click on that file and your mod folder should be there then drag and drop your files, both mesh or texture inside)",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Where is the male/female model?",
      answer:   "The models are Unisex. Link to Adult model is here:HumanAdultRigFiles.zip",
      link:     "https://drive.google.com/file/d/1ILLHldq3A0bdnm0FU9A4g14xrRs14ar7/view",
      alsoNote: "Toddler/Baby Models are same. Link is here: HumanToddlerRigFiles.zip",
      alsoLink: "https://drive.google.com/file/d/1D86uthbiu5YWATbm8lmigruDP4jn3qDC/view",
      image:    ""
    },
    {
      question: "What are some nice to know shortcuts/hacks when modding Paralives?",
      answer:   "Turn your mod on then off again to reimport assets into the game without exiting. \nYou can change scale of your mesh for build mode if its a bit large in local scale 1 is 100% and 0.5 is 50% etc.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Why was I banned and my mod taken down?",
      answer:   "Steam policy says that all mods have to match the rating of the game. So with a T game, all mods need to be T or below. Copyrighted materials are also not allowed.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Can we do scripting? Are script mods supported by the game?",
      answer:   "You can do scripting, it's just not supported by the game.\nScript mods use external scripts to inject content into the game.\nParalives instead had inbuilt modding tools that allow you to do a ton of things other games need script mods for.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "What resolution should the texture have? 1024x1024 or Higher?",
      answer:   "According to the wiki, textures should be 512x512, though you can go smaller res if the item is very small (256) or bigger (1024) In any case, make sure the texture is in one of these formats as anything else will mess with optimisation: 128, 256, 512, 1024, max 2048)",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How could I export a Para I made in game into Blender?",
      answer:   "No known method yet",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Can I port furniture from the Sims 4 to Paralives?",
      answer:   "In Steam workshop, no, due to copyright issues.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "What guides are there to learn Blender or Modding? Please give link",
      answer:   "Check out our Resources tab!",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Is there a limit to the number of polygons in a custom mesh?",
      answer:   "No recommended polycount. You can upload as high a poly as you'd like but PC limitations are a thing, so keep that in mind. Try to keep it under 5k when possible",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "When configuring an item, can we import a separate Ambient Occlusion (AO) bake map? Or should the AO be baked directly into the base texture? I want to make sure it won't interfere with the in-game Color Wheel or mess up the material customization.",
      answer:   "In Paralives, if you use a Base Color texture (called Detail Map), you won't be able to recolor. The best way to do this would be to create a Color Zone texture with only the AO mask in it (and keep in mind the game doesn't handle gradients in masks very well). Then, you'd be able to have a base texture from the Paralives database or your own and an extra layer with just the AO that will also be recolorable",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Does anyone know the recommended poly count range for objects?",
      answer:   "No recommended polycount. You can upload as high a poly as you'd like but PC limitations are a thing, so keep that in mind. Look at official assets and try to keep within that range whenever possible.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Can I make a fan-translation of the game?",
      answer:   "Yes! It is even encouraged\nHere is a resource https://docs.google.com/document/d/1b0hjUyutoT73D1p4-KnbaQUUoMsAZ_BNOiojj1XnZFI/edit?tab=t.0#heading=h.n8vfgm7873ph",
      link:     "https://docs.google.com/document/d/1b0hjUyutoT73D1p4-KnbaQUUoMsAZ_BNOiojj1XnZFI/edit?tab=t.0",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "The hair/clothing shows up in Paramaker but the mesh doesnt show up so the Para's just bald/invisible, could I be missing something?",
      answer:   "",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Is there a way to refresh files ingame?",
      answer:   "Turn your mod on then off again to reload the assets or if a furniture item, go to the settings of the Asset Mesh, find the Use Source Mesh button, tick it, press ok and it'll reload the asset, you can then untick the box right after.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "I don't know how to make the game acknowledge my fbx file?",
      answer:   "You put it in the mod folder (The mod folder is located in C:\\Users\\Username\\AppData\\LocalLow\\Paralives\\Paralives\\ModName) as loose files without it being nested in other folders, and restart your game. You can open mod folder in the in game modding tool.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Do I need to own the game to view mods for the game?",
      answer:   "Yes",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Could someone kindly explain what Color Zone is used for?",
      answer:   "Masking areas to use different colors\nThink of it as how you mask in photoshop, except you use red/blue/green for different areas instead of black and white. It's similar to the way The Sims 3 had different color channels.",
      link:     "",
      alsoNote: "Check out this tutorial!\nHow To Use Color Zone Textures in Paralives - Tutorial",
      alsoLink: "https://www.youtube.com/watch?si=RbHS0duaCQV3VruO&v=V8uk2lTpkvE&feature=youtu.be",
      image:    ""
    },
    {
      question: "How do I import textures into Paralives?",
      answer:   "You put it in the mod folder (The mod folder is located in C:\\Users\\Username\\AppData\\LocalLow\\Paralives\\Paralives\\ModName) and restart your game. You can open mod folder in the in game modding tool. It's recommended to create a subfolder called 'Textures' under the mod folder to keep things manageable\nAlso as an added feature, name your textures these way based on what type of file it is.\nYourTexturesNameHereGrayMask\nYourTexturesNameHereMaster\nYourTexturesNameHereDetail\nYourTexturesNameHereNormalOcclusion\nYourTexturesNameHereColorZone\nYourTexturesNameHereSmoothness",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How can I add a preview image for my mod on steam workshop? I already set a preview image in-game, but it didn't automatically changed my preview image on the workshop.",
      answer:   "Go to your mod in Steam Workshop, on the right side panel there is an option to add/edit images",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Any help with the scale and export from Blender?",
      answer:   "Use the image on the right as a basis on the transform options when you export an FBX from Blender.\nAs for scale, Paralives uses mostly realistic scaling so you can use the grid as a reference for the size of your object. You could even import the base mesh of a Para as reference, if preferred. \nMake sure to Apply All Transforms before exporting to ensure good scaling on export!",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    "image13"
    },
    {
      question: "What model formats does Paralives allow?",
      answer:   "FBX and OBJ but FBX is recommended",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Can I release a version of my mod and then update it or would I have to make a whole separate mod if I add additional items?",
      answer:   "You can update it in game by clicking on the cloud icon next to your mod. It will ask you to enter a description of the changes made and the update will be sent to anyone owning the mod",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "When I press the plus button in items it doesn't seem to actually add anything to the list, am I missing something?",
      answer:   "It added but doesn't show or go immediately to the item. You need to open the Items dropdown and scroll to the very bottom. You'll see a nameless item.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "I created a mod,and clicked edit button and nothing happened. Does anyone knows how to really create a mod?",
      answer:   "Click Control Panel",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Why do my original files not get a meta file apended to them? Whats going on is the modding bugged?",
      answer:   "Restart your game",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Anyone here know how to import a 3d model in as an Asset Mesh so it shows up under ItemMeshReference?",
      answer:   "You put it in the mod folder (The mod folder is located in C:\\Users\\Username\\AppData\\LocalLow\\Paralives\\Paralives\\ModName) as loose files without it being nested in other folders, and restart your game. You can open mod folder in the in game modding tool.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How can I take assets from the game and import them into blender?",
      answer:   "You can find it in Main.mod folder (C:\\Program Files (x86)\\Steam\\steamapps\\common\\Paralives\\Main.mod)\nYou'll need to copy this folder somewhere else.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "In making a resizable item, why does my item tear?",
      answer:   "You need the cuts in Blender and in the game.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Why aren't the location handles working in item prefab? Its not letting me move it to actually sit on the ground surface. The local position is just stuck, I can't move it at all.",
      answer:   "You have to do that before importing it that's why in the guide it references needing to make sure the mesh is lined up where you want it or else that happens since you can't use the gizmo in the control panel.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "I‘m trying to figure out how to import textures at the moment and was wondering about the GrayMask that is mentioned in the wiki, if I want to make a texture than can be recolored can I just use the normal hand painted texture (what paralives calls detail map) and turn it into grayscale?",
      answer:   "Those are two different things. \nDetails = custom to the object. \nGrayMask = a tiling texture that can be reused (like wood details, metal, etc).\nSo the detail map is created by drawing on the UVs of the object. A tiling texture can be reused in many many places, so are not bounds by the UVs of the mesh (though correct UVs will display the tiling texture properly).",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How do I make my item bigger instead of being tiny and in the ground?",
      answer:   "Make sure your object is at the proper scale and apply all transforms before exporting.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How to make a blue text appear on my item in the build mode selling page?",
      answer:   "It's actually the Patreon Name field in the item control panel.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Has anyone figured how to make a new interaction appear in the interaction menu?",
      answer:   "Check out this resource! How to Set Up Object Interactions in Paralives",
      link:     "https://docs.google.com/document/d/1Y2crxwLU4EadDDdIpR90BmiJTwvNajlYtUoAUeYV9qA/edit?usp=sharing",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How to add variants to your object?",
      answer:   "Use the 'ItemVariant' option in the prefab",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    "image11"
    },
    {
      question: "How to add interactions to objects?",
      answer:   "Check out this resource! How to Set Up Object Interactions in Paralives",
      link:     "https://docs.google.com/document/d/1Y2crxwLU4EadDDdIpR90BmiJTwvNajlYtUoAUeYV9qA/edit?usp=sharing",
      alsoNote: "",
      alsoLink: "",
      image:    "image15"
    },
    {
      question: "Do we already have some kind of workflow to declare dependencies for mods?",
      answer:   "Steam Workshop allows you to set up required mods.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Is using blender 4.2.4 important for making models for paralives? I see it recommended on the wiki so I assume it is but why?",
      answer:   "The version 4.2.4 is important for animation and rigging, otherwise any other version is alright. It's for compatibility.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "My item is sunken to the ground, how to fix?",
      answer:   "What you need to do is bring it into Blender and put the origin (pivot point) at the bottom of the object. Make sur to Apply All Transforms afterwards",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Are there custom names for each swatch? How to set up?",
      answer:   "Yes. You need to do Ctrl + T on the new Color Zone name and enter the proper name in Translated Text.\nSo it looks like you name it whatever. Exit the swatches and go back in and the untranslated names are there then you can CTRL + T to add the correct name.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "My items aren't showing in the buy menu? If I search for them I can get them, but browsing through where I thought they'd show, they aren't there.",
      answer:   "You need to correctly tag them in the item settings (window before opening the prefab). Some tags can't be seen in build buy mode.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Why is my texture showing white when others download my mod?",
      answer:   "I have the solution to the item textures not displaying on download. Surface needs to be set to GenericGrayMask, Detail map linked to the texture png. ONLY WORKS FOR DETAIL MAP",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Why can't I see my downloaded mods?",
      answer:   "Your save files and mod files should be in the same drive.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How would I go about adding a description to a catalog item?",
      answer:   "The blue text underneath is the Patreon Name. While Main text is Translated Text.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    "image16"
    },
    {
      question: "I made a hair in Blender but I don't know how to put it in ParaLives. I put it in the mods folder but it just keeps processing the mesh indefinitely. What did I do wrong?",
      answer:   "Check your polygon count if it is below 5k.\nNext is to ckeck if you deleted the \n.fbx\n.fbx.import\n.fbx.meta\nBefore reimporting your mesh again.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "When creating skills and careers, what is the recommended order to create new actions/interactions/etc and what is absolutely necessary? Also, how to link skills to a new item?",
      answer:   "This hasn't been explored too much yet, but this could be a good starting point for you. The States sections could be the way to go\nHow to Set Up Object Interactions in Paralives",
      link:     "https://docs.google.com/document/d/1Y2crxwLU4EadDDdIpR90BmiJTwvNajlYtUoAUeYV9qA/edit?usp=sharing",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How do I make custom accessories? (Glasses, bracelets, headbands, etc.)",
      answer:   "Paralives/Blender Tutorial for Modded Glasses",
      link:     "https://www.youtube.com/watch?v=GoAC2g1SCX0",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "What is UV 1 & UV 2?",
      answer:   "UV1 is the UV layout and texture of the mesh on its own, and UV2 is the deformation map (controls how facial and body sliders affect features in Paramaker) designed to show where the mesh is situated on the Para UV layout. (IMG 1: UV1, IMG: UV2). Go under the mesh data in Blender (Green triangle), then under UV maps to create two separate ones.\n\nUV1 is \"how it looks\" and UV2 is \"how the game understands deformation zones\"",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    "image21"
    },
    {
      question: "Any clue how to make cabinets work with sinks? Do we need alternative mesh types for the holes? Can't find documentation for it",
      answer:   "Add an 'ItemObjectWithStencilBufferHole' in the prefab",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How do we make alternative versions of the same item? ie making sure there's empty bookshelf version as well as normal bookshelf with books",
      answer:   "Use the 'ItemVariant' option in the prefab",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "How to make a new equipment category/tag in Paralives?",
      answer:   "1. Edit your mod and go to the control panel.\n2. Click \"Character Creator Tags\" and click the plus button in the Tags dropdown.\n3. Scroll down and add a display name. (For example, Bracelets2) For Character Requirements add Adult Model (Or whichever).\n4. Next, scroll back up and use the search function to find the category you're adding your new tag to. (For example, I'm adding Bracelet2 to the FacialJewelry tag so that it will show up as a subcategory of that tag.)\n5. Under your preferred category, find the dropdown that says \"Children Tags In Character Creator UI\" and click the plus button. 6. Name this the same. (i.e Bracelets2)\n7. Press the back button and click \"Equipment\"\n8. Scroll down to your Equipment and set up your tags so they match the tag you set up.\n9. Scroll down more until you see \"Equipment Slots\" and click the plus button.\n10. Find that new entry and name it the same. (Bracelets2)\n\nI'm not sure about mods overwriting other categories if they're named the same, so if every person adds their own category, it might cause issues. It might be a more constructive idea to make a Tags/Categories mod that adds extra categories and people work from that so we don't overwrite each other's tags. Though it might be worth it to go with common naming conventions that the game is already using like Bracelets2 or Hats2. I'm wondering if we have two mods, each with a custom Hats2 tag, if they will duplicate the tag/category, or just work out of the box. \nThis would take some time to get set up and I'm not entirely sure how we'd keep the extra categories enabled while adding our own mods, either. I'm going to look into it later unless someone does it first.",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    "image8"
    },
    {
      question: "How to mod in new recipes/food items into the game?",
      answer:   "",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Do we know anything about the Lot Item Layers yet? Is there a way to add custom ones and how can we define the items to spawn?",
      answer:   "",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Brain logic on end hasStatusEffect now triggers on start instead for me and the users of my mod - it used to work fine, like on end day1 add day2, now even though these statuses take a day to expire, they trigger on end immediately. I have not changed anything with my mod, it just stopped working. No matter how I add a status effect, it triggers on end immediately",
      answer:   "",
      link:     "",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
    {
      question: "Where can I find the animations used in game?",
      answer:   "Noroiko did all the work by uploading all the animations and converted them to FBX files - https://www.nexusmods.com/paralives/mods/167",
      link:     "https://www.nexusmods.com/paralives/mods/167",
      alsoNote: "",
      alsoLink: "",
      image:    ""
    },
  ],

  /* ==========================================================================
     4) RESOURCES & TOOLS  —  shown on the "Resources & Tools" page.

     Resources are grouped into CATEGORIES. Each category has a colour and a
     list of items. An item looks like this:

         {
           name:    "What it is called (this is the clickable title)",
           link:    "https://...",   // where the title links to (empty "" = no link)
           creator: "",   // optional: who made it / the brand
           type:    "",   // optional: small label, e.g. "Tutorial"
           addedBy: "",   // optional: who added it (optional)
           notes:   ""    // optional: a description
         },

     HOW TO ADD A NEW RESOURCE: find the category you want below, copy one of
     its items, paste it as the first item in that category, and edit the text.
     You can either keep it as a one-liner or use the block from above.
     The one-liner is just a little more compact.

     HOW TO ADD A NEW CATEGORY: copy a whole { category: ... } block and give
     it a new name. The "color" sets the accent colour (a hex code like the
     ones already used: pink #D5A6BD, rose #E6B8AF, orange #F6B26B,
     gold #F1C232, green #93C47D, teal #45818E, blue #3D85C6,
     royal #3C78D8, purple #8E7CC3).
     ========================================================================== */
  resources: [
    {
      category: "Programs",
      color:    "#D5A6BD",
      items: [
        { name: "Blender | Documentation", link: "https://www.blender.org/download/", creator: "Blender", type: "3D Modeling & Rendering", addedBy: "", notes: "The most popular 3D modeling program" },
        { name: "Marvelous Designer", link: "https://www.marvelousdesigner.com/", creator: "Marvelous", type: "3D Modeling & Rendering", addedBy: "", notes: "Free 2 week trial, $39/mo after" },
        { name: "Milkshape 3D", link: "http://milkshape3d.com/ms3d/", creator: "Milkshape", type: "3D Modeling & Rendering", addedBy: "", notes: "Low Poly 3D modeling" },
        { name: "TinkerCAD", link: "https://www.tinkercad.com/", creator: "Autodesk", type: "3D Modeling & Rendering", addedBy: "", notes: "" },
        { name: "SelfCAD", link: "https://www.selfcad.com/", creator: "Crossbrowser 3D", type: "3D Modeling & Rendering", addedBy: "", notes: "" },
        { name: "Clip Studio Modeler", link: "https://www.clipstudio.net/en/modeler/", creator: "Clip Studio Paint", type: "3D Modeling & Rendering", addedBy: "", notes: "" },
        { name: "Mixamo", link: "http://www.mixamo.com/", creator: "Adobe", type: "3D Modeling & Rendering", addedBy: "", notes: "" },
        { name: "GIMP | Tutorials", link: "https://www.gimp.org/", creator: "GIMP", type: "Graphics & Photo Editing", addedBy: "", notes: "" },
        { name: "Photopea | Tutorials", link: "https://www.photopea.com/", creator: "Photopea", type: "Graphics & Photo Editing", addedBy: "", notes: "Web based alternative to Photoshop" },
        { name: "Paint.NET | Tutorials", link: "https://www.getpaint.net/", creator: "Paint.NET", type: "Graphics & Photo Editing", addedBy: "", notes: "" },
        { name: "Krita | Tutorials", link: "https://krita.org/en/", creator: "Krita", type: "Graphics & Photo Editing", addedBy: "", notes: "Alternative to Photoshop. Also has pattern making tools and 2D animation." },
        { name: "ILSpy .NET Decompiler", link: "https://github.com/icsharpcode/ILSpy", creator: "icsharpcode", type: "Decompiler", addedBy: "", notes: "" },
        { name: "AssetRipper", link: "https://assetripper.org/", creator: "AssetRipper", type: "Decompiler", addedBy: "", notes: "For deconstructing Unity-based game files" },
        { name: "BepInEx", link: "https://github.com/bepinex/bepinex", creator: "BepInEx", type: "Modding Framework", addedBy: "", notes: "Plugin/modding framework for Unity Games" },
      ]
    },
    {
      category: "General Guides",
      color:    "#E6B8AF",
      items: [
        { name: "Official Modding Tutorials & Guides | START HERE", link: "https://paralives.wiki.gg/wiki/Portal:Modding_guides", creator: "Paralives", type: "Tutorials", addedBy: "", notes: "" },
        { name: "Beginner Guides | START HERE", link: "https://paralives.wiki.gg/wiki/Portal:Modding_guides", creator: "Paralives", type: "Tutorials", addedBy: "", notes: "Brand spanking new? Check these out if you don't know where to go" },
        { name: "Cheats", link: "https://paralives.wiki.gg/wiki/Cheats", creator: "Paralives", type: "Cheats", addedBy: "", notes: "" },
        { name: "Steam Workshop Guides", link: "https://steamcommunity.com/app/1118520/guides/", creator: "Steam Workshop", type: "Tutorials", addedBy: "", notes: "" },
        { name: "Getting Started Modding Paralives", link: "https://www.tumblr.com/alders-simblr/817731408684613632/getting-started-modding-paralives?source=share", creator: "alderwitch", type: "Guides", addedBy: "", notes: "" },
      ]
    },
    {
      category: "Blender & Other Programs Tutorials",
      color:    "#F6B26B",
      items: [
        { name: "Beginner Blender Tutorial (Donut Tutorial)", link: "https://www.youtube.com/watch?v=z-Xl9tGqH14", creator: "BlendGuru", type: "Blender", addedBy: "", notes: "" },
        { name: "Sword & Stone Tutorials (Blender 4.0)", link: "https://youtube.com/playlist?list=PL8eKBkZzqDiV2xca_7QVNdG8LGBfZBCkI&si=MmZLRfzeEZijemTu", creator: "CG Fast Track", type: "Blender", addedBy: "", notes: "" },
        { name: "Learn Blender 5 Tutorial Series", link: "https://www.youtube.com/playlist?list=PLn3ukorJv4vv9_e-htADGsPX9TMaQpHV8", creator: "Grant Abbitt", type: "Blender", addedBy: "", notes: "" },
        { name: "Blender for Complete Beginners Series", link: "https://www.youtube.com/playlist?list=PLsGl9GczcgBumq6fLmmR1ZYYn4EDkIg5B", creator: "Ryan King Art", type: "Blender", addedBy: "", notes: "" },
        { name: "Texture Bake: High Poly to Low Poly", link: "https://www.youtube.com/watch?v=Zxl38NpPWdo", creator: "Ryan King Art", type: "Blender", addedBy: "", notes: "" },
        { name: "Retopology for Beginners", link: "https://www.youtube.com/watch?v=1myOZaxtHes", creator: "Ryan King Art", type: "Blender", addedBy: "", notes: "" },
        { name: "Blender + Clip Studio Paint Texturing", link: "https://www.youtube.com/watch?v=MVsvw3kNKrs", creator: "tomawash", type: "Blender", addedBy: "", notes: "" },
        { name: "Reducing Polycount in Blender", link: "https://itsonlythee-sims.tumblr.com/post/787925394729943040/mini-tutorial-reducing-polycount-in-blender-with", creator: "itsonlythee-sims", type: "Blender", addedBy: "", notes: "" },
        { name: "Blender 4.0: How to UV Unwrap Anything", link: "https://www.youtube.com/watch?v=XleO7DBm1Us", creator: "On Mars 3D", type: "Blender", addedBy: "", notes: "" },
        { name: "Cute Blender Tutorial for Beginners", link: "https://www.youtube.com/watch?v=7VIJNnPXfqI", creator: "Lana Easteregg", type: "Blender", addedBy: "", notes: "" },
        { name: "Vertex Color per Face in Blender", link: "https://www.marciofontenelle3d.com/blog/vertex-color-per-face-in-blender", creator: "Marcio F. Fontenelle", type: "Blender", addedBy: "", notes: "" },
        { name: "How to Show Normals and Flip Normals Blender 4", link: "https://www.youtube.com/watch?v=qJvvDHyK14Y", creator: "blenderian", type: "Blender", addedBy: "", notes: "" },
        { name: "How to Delete Every Two Edges in Blender", link: "https://www.youtube.com/watch?v=Z4OZfaPN69U", creator: "SimonSanchezArt", type: "Blender", addedBy: "", notes: "" },
        { name: "Stylised hair tutorial", link: "https://www.youtube.com/watch?v=BqWYgrXw7Jk", creator: "Yab Sculpts", type: "Blender", addedBy: "gleamiarts", notes: "A general tutorial for making stylised hair in Blender using curves." },
        { name: "Modifiers for Beginners (Blender Tutorial)", link: "https://youtu.be/F_f-O-W9lMU", creator: "Ryan King Art", type: "Blender", addedBy: "itsonlythee", notes: "A good intro to the modifiers in Blender" },
        { name: "Auto Reload", link: "https://extensions.blender.org/add-ons/auto-reload/", creator: "tonton", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Robust Weight Transfer", link: "https://github.com/sentfromspacevr/robust-weight-transfer", creator: "SentFromSpaceVR", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Skin Mesh To Bone", link: "https://extensions.blender.org/add-ons/skin-mesh-to-bone/", creator: "darknation", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "PolyQuilt", link: "https://extensions.blender.org/add-ons/polyquilt-fork/", creator: "Dan-Gry", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Game Rig Tools", link: "https://toshicg.gumroad.com/l/game_rig_tools", creator: "CGDive", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "DreamUV", link: "https://github.com/leukbaars/DreamUV", creator: "leukbaars", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Magic UV", link: "https://extensions.blender.org/add-ons/magic-uv/", creator: "nutti", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Mio3 UV", link: "https://extensions.blender.org/add-ons/mio3-uv/", creator: "Mio3", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Mio3 Copy Weight", link: "https://extensions.blender.org/add-ons/mio3-copy-weight/", creator: "Mio3", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Texel Density Checker", link: "https://extensions.blender.org/add-ons/texel-density-checker/", creator: "IvanVoskitrov", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "EasyWeight", link: "https://extensions.blender.org/add-ons/easyweight/", creator: "Mets", type: "Blender Plug-ins", addedBy: "maxtron95", notes: "" },
        { name: "Learn Marvelous Designer in 20 Minutes", link: "https://www.youtube.com/watch?v=K0zl7CSSvxc", creator: "ProductionCrate", type: "Marvelous Designer", addedBy: "", notes: "" },
        { name: "How to Properly Export from Milkshape 3D to PSK Any Model", link: "https://www.youtube.com/watch?v=nTQZ5vORaBg", creator: "UT1999", type: "Milkshape 3D", addedBy: "", notes: "" },
        { name: "Getting Started 3D Modeling in Milkshape", link: "https://www.youtube.com/watch?v=8yAIzoQ5Z7g", creator: "tinyzoo", type: "Milkshape 3D", addedBy: "", notes: "" },
        { name: "How to Make Seamless Textures, Patterns and Tilesets in Krita", link: "https://www.youtube.com/watch?v=eoO5s3-__sM", creator: "Rexel Bartolome", type: "Krita", addedBy: "", notes: "" },
        { name: "How to Paint 3D Textures in Clip Studio Paint", link: "https://www.youtube.com/watch?v=lGeWfWDs0Rs", creator: "Clip Studio Paint", type: "Clip Studio Paint", addedBy: "", notes: "" },
        { name: "How to make Seamless Patterns in Illustrator", link: "https://www.youtube.com/watch?v=uO3jH2RZA5A", creator: "Dansky", type: "Illustrator", addedBy: "gleamisims", notes: "" },
        { name: "Types of Normal Maps & Common Normal Map Issues", link: "https://80.lv/articles/tutorial-types-of-normal-maps-common-problems", creator: "80.lv", type: "General 3D art", addedBy: "itsonlythee", notes: "" },
      ]
    },
    {
      category: "Buy Mode",
      color:    "#F1C232",
      items: [
        { name: "Dev Diary: How to Make Furniture from Scratch", link: "https://www.patreon.com/posts/53220322", creator: "Alex Massé", type: "Furniture", addedBy: "", notes: "" },
        { name: "How to Mod Furniture", link: "https://docs.google.com/document/d/1JrmLejJVIYnvHEg4ZBnYjdPrHxo30lEUEYwbAMPgcFY/edit?usp=sharing", creator: "TheParaGrimm", type: "Furniture", addedBy: "", notes: "" },
        { name: "Create Custom Objects for Build Mode", link: "https://youtu.be/PpOTkJr5gZk?si=BOBQEfCZetu2F71p", creator: "Maru", type: "Custom Objects", addedBy: "", notes: "" },
        { name: "How to Create Objects", link: "https://www.youtube.com/watch?v=wtIDswumERA", creator: "Plump_Iv", type: "Custom Objects", addedBy: "", notes: "" },
        { name: "How to Animate Custom Objects", link: "https://docs.google.com/document/d/17pdRz86GNv_MpZ_xs1372iJDcVLUCpAyw96fl7sHXZs/edit?usp=sharing", creator: "Aspen", type: "Custom Objects", addedBy: "", notes: "" },
        { name: "How to Set Up Object Interactions", link: "https://docs.google.com/document/d/1Y2crxwLU4EadDDdIpR90BmiJTwvNajlYtUoAUeYV9qA/edit?usp=sharing", creator: "Maru", type: "Object Interactions", addedBy: "", notes: "" },
        { name: "How to Use Color Zone Textures", link: "https://www.youtube.com/watch?v=V8uk2lTpkvE", creator: "Maru", type: "Textures", addedBy: "", notes: "" },
        { name: "Using Detail Textures and Glass", link: "https://youtu.be/rCtbt-0qMt0?si=_nrSyE7CfJrhE2wN", creator: "Maru", type: "Textures", addedBy: "", notes: "" },
        { name: "How to Create Custom Surfaces", link: "https://youtu.be/0lLCadXiDEs?si=rlzTnelEBA1KGSFA", creator: "Maru", type: "Textures, Surfaces", addedBy: "", notes: "" },
      ]
    },
    {
      category: "Paramaker",
      color:    "#45818E",
      items: [
        { name: "Robust Weight Transfer", link: "https://github.com/sentfromspacevr/robust-weight-transfer", creator: "sentfromspacevr", type: "Weight Transfer", addedBy: "", notes: "" },
        { name: "Adding Custom Textures for the Paramaker", link: "https://paralives.wiki.gg/wiki/Adding_Custom_Textures_for_the_Paramaker", creator: "Paralives", type: "UV Maps & Rigs", addedBy: "", notes: "" },
        { name: "Easiest Way to Create Hair in Blender - 5 Minute Tutorial", link: "https://www.youtube.com/watch?v=BqWYgrXw7Jk&t=279s", creator: "YanSculpts", type: "Hair", addedBy: "", notes: "" },
        { name: "Blender: How to make Hair, Full Workflow", link: "https://www.youtube.com/watch?v=LU0BFThJIco", creator: "2AM", type: "Hair", addedBy: "", notes: "" },
        { name: "Easiest Way to Create Stylized Hair", link: "https://www.youtube.com/watch?v=wu_TkcQZqJg&t=131s", creator: "Aram Art", type: "Hair", addedBy: "", notes: "" },
        { name: "3D Modeling Hair Playlist", link: "https://www.youtube.com/playlist?list=PLEhvqwahPFTLbrTLoIVGXQlWdh_3PuJAk", creator: "cosmolojay", type: "Hair", addedBy: "", notes: "" },
        { name: "Swagful Scuffed Paralives Hair Converting Tutorial", link: "https://www.youtube.com/watch?v=s6mazchK2U0", creator: "zinnia", type: "Hair", addedBy: "", notes: "" },
        { name: "Creating a Stylized Hair in Blender", link: "https://www.youtube.com/watch?v=hiZ7ZLbLQ_I", creator: "Little Chamomile", type: "Hair", addedBy: "", notes: "" },
        { name: "How to Create Hair Mod", link: "https://www.youtube.com/watch?v=l7PXtRPEfTs", creator: "ParaZoi", type: "Hair", addedBy: "", notes: "" },
        { name: "Modded Glasses Tutorial", link: "https://youtu.be/GoAC2g1SCX0", creator: "Outcast Mods", type: "Glasses", addedBy: "", notes: "" },
        { name: "How to Make Skin Overlays", link: "https://docs.google.com/document/d/1_NAfuU8pGhS3gYXDIigVkAayyF2fsmndiwTfuEWH1vE/edit?usp=sharing", creator: "Celaziel", type: "Skin", addedBy: "", notes: "" },
        { name: "How to Make Default Eyes", link: "https://myshunosun.com/post/818127003627683840/im-so-sorry-to-ask-but-would-you-mind-pointing-me", creator: "myshunosun", type: "Eyes", addedBy: "", notes: "" },
        { name: "Creating a Tattoo", link: "https://www.youtube.com/watch?v=f3sSpF_v7iM&list=PLTN2ilvsdiyY_sXx0N0YfbseyDpKRFh74", creator: "GreyChaos", type: "Tattoos", addedBy: "", notes: "" },
        { name: "How to make a shirt for The Sims 4 -Marvelous Designer", link: "https://youtu.be/TrRJyZLYn9s?si=DFcxzd1ZzH6fjS_V", creator: "FamSimsss", type: "Clothing", addedBy: "", notes: "" },
      ]
    },
    {
      category: "Live Mode / Gameplay Mods",
      color:    "#3D85C6",
      items: [
        { name: "Making a Rabbithole Interaction", link: "https://docs.google.com/document/d/1nkd-Eqtn0ZLCOlusgoCCWeHm1G3ivt-_XzYMNmWirJQ/edit?tab=t.0", creator: "", type: "Gameplay", addedBy: "", notes: "" },
        { name: "How to Make Custom Computer Games", link: "https://www.youtube.com/watch?v=GEJx6YUDF_c", creator: "GreyChaos", type: "Gameplay", addedBy: "", notes: "" },
        { name: "What is in the Personality Section of the Modding Tools?", link: "https://www.youtube.com/watch?v=1r3EA8EPHvw", creator: "cinnamyl", type: "Gameplay", addedBy: "", notes: "" },
        { name: "Creating Custom Jobs", link: "https://www.youtube.com/watch?v=h5QX9ufpuKU", creator: "GreyChaos", type: "Gameplay", addedBy: "", notes: "" },
        { name: "Custom Radio Stations", link: "https://gnomers.gumroad.com/l/PARALIVESCustomRadioStations", creator: "gnomers", type: "Gameplay", addedBy: "", notes: "" },
        { name: "How to Set Up Object Interactions", link: "https://docs.google.com/document/d/1Y2crxwLU4EadDDdIpR90BmiJTwvNajlYtUoAUeYV9qA/edit?usp=sharing", creator: "Maru", type: "Object Interactions", addedBy: "", notes: "" },
        { name: "Creating a Together Card", link: "https://paralives.wiki.gg/wiki/Creating_a_Together_Card", creator: "theslimyboi", type: "Together Cards", addedBy: "vampishly", notes: "" },
        { name: "All Paralives Animations As FBX", link: "https://www.nexusmods.com/paralives/mods/167", creator: "Noroiko (Zaranyx)", type: "Animations", addedBy: "Grimm", notes: "" },
      ]
    },
    {
      category: "User Interface & Overrides",
      color:    "#3C78D8",
      items: [
        { name: "How to fix empty squares & add Custom Font Support", link: "https://docs.google.com/document/d/1b0hjUyutoT73D1p4-KnbaQUUoMsAZ_BNOiojj1XnZFI/edit?tab=t.0", creator: "Jame_", type: "Fonts", addedBy: "", notes: "How to translate the game too" },
        { name: "Creating Custom Para Selector", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3734242695", creator: "catskins", type: "Para Selector", addedBy: "vampishly", notes: "How to change the selector under your Para's feet" },
      ]
    },
    {
      category: "Resources",
      color:    "#666666",
      items: [
        { name: "Adult Rig (for child lifestages and older)", link: "https://drive.google.com/file/d/1ILLHldq3A0bdnm0FU9A4g14xrRs14ar7/view?usp=drive_link", creator: "Paralives", type: "Rigs", addedBy: "", notes: "" },
        { name: "Toddler Rig (for toddlers and babies)", link: "https://drive.google.com/file/d/1D86uthbiu5YWATbm8lmigruDP4jn3qDC/view?usp=drive_link", creator: "Paralives", type: "Rigs", addedBy: "", notes: "" },
        { name: "Animation Ready Rig", link: "https://drive.google.com/file/d/1jFRomEy9zhvAEE3qjAHuR1WsD70XwEGR/view?usp=drive_link", creator: "Paralives", type: "Rigs", addedBy: "", notes: "" },
        { name: "Skin & Eyes PSDs", link: "https://www.patreon.com/posts/paralives-psds-159613478", creator: "alderwitch", type: "Skin & Eyes", addedBy: "", notes: "" },
        { name: "Parafolks Texture Base", link: "https://www.nexusmods.com/paralives/mods/31", creator: "UnhappySorbet", type: "Normals & UV Maps", addedBy: "vampishly", notes: "" },
        { name: "Simandy's Streak Mesh + Textures (Puppy Crow Colors)", link: "https://www.patreon.com/posts/78701550", creator: "Simandy", type: "Mesh + Textures", addedBy: "vampishly", notes: "This is for Sims 4 but hair mesh creators may find it useful! It's a .blend file!" },
        { name: "NormalMap-Online", link: "https://cpetry.github.io/NormalMap-Online/", creator: "cpetry", type: "NormalMap", addedBy: "Grimm", notes: "Create a NormalMap directly inside your browser." },
        { name: "List of Public Domain Stuff", link: "https://github.com/madjin/awesome-cc0", creator: "madjin", type: "Public Domain", addedBy: "", notes: "Places to get free 3D models, textures, sounds, music and more!" },
        { name: "Searchmonkey", link: "https://searchmonkey.dev/", creator: "Searchmonkey", type: "Software", addedBy: "gleamisims", notes: "Advance local file search with regex" },
        { name: "Everything", link: "https://www.voidtools.com/", creator: "Voidtools", type: "Software", addedBy: "itsonlythee", notes: "\"Everything\" is a search engine that locates files and folders by filename instantly for Windows. Unlike Windows search \"Everything\" initially displays every file and folder on your computer (hence the name \"Everything\"). You type in a search filter to limit what files and folders are displayed." },
        { name: "TextureLabs", link: "https://texturelabs.org/", creator: "TextureLabs", type: "Texture", addedBy: "", notes: "" },
        { name: "Polyhaven", link: "https://polyhaven.com/", creator: "Polyhaven", type: "Texture", addedBy: "", notes: "" },
        { name: "3DTextures.me", link: "http://3dtextures.me/", creator: "3DTextures", type: "Texture", addedBy: "", notes: "" },
        { name: "TextureCan", link: "https://www.texturecan.com/", creator: "TextureCan", type: "Texture", addedBy: "", notes: "" },
        { name: "AmbientCG", link: "https://ambientcg.com/", creator: "AmbientCG", type: "Texture", addedBy: "", notes: "" },
        { name: "High Resolution Textures", link: "https://seamless-pixels.blogspot.com/", creator: "seamless-pixels", type: "Texture", addedBy: "", notes: "" },
        { name: "fuzzimo", link: "https://www.fuzzimo.com/", creator: "fuzzimo", type: "Texture", addedBy: "", notes: "" },
        { name: "ColourLovers Patterns", link: "https://www.colourlovers.com/patterns", creator: "ColourLovers", type: "Patterns", addedBy: "", notes: "" },
        { name: "Unsplash Patterns", link: "https://unsplash.com/s/photos/pattern", creator: "Unsplash", type: "Patterns", addedBy: "", notes: "" },
        { name: "Hero Patterns", link: "https://heropatterns.com/", creator: "Hero Patterns", type: "Patterns", addedBy: "", notes: "" },
        { name: "80k+ Free Patterns & Images", link: "https://pixabay.com/images/search/pattern/", creator: "Pixabay", type: "Patterns", addedBy: "", notes: "" },
        { name: "Toptal Patterns", link: "https://www.toptal.com/designers/subtlepatterns/", creator: "Toptal", type: "Patterns", addedBy: "", notes: "" },
        { name: "Free Pettern Vector Images", link: "https://www.vectorstock.com/free-vectors/pattern-vectors", creator: "VectorStock", type: "Patterns", addedBy: "", notes: "" },
        { name: "Pattern Vector Images", link: "https://www.vecteezy.com/free-vector/pattern", creator: "Vecteezy", type: "Patterns", addedBy: "", notes: "" },
        { name: "Gradient Maker", link: "https://coolors.co/gradient-maker/295270-524175", creator: "Coolors", type: "Colors/Gradients", addedBy: "", notes: "" },
        { name: "Gradient Generator", link: "https://www.figma.com/gradient-generator/?s=05a%210037FF6400%219E16FF6464", creator: "Figma", type: "Colors/Gradients", addedBy: "", notes: "" },
        { name: "Noise & Gradient", link: "https://www.noiseandgradient.com/", creator: "Noise & Gradient", type: "Colors/Gradients", addedBy: "", notes: "" },
        { name: "Color Hex", link: "https://www.color-hex.com/", creator: "Color Hex", type: "Colors/Gradients", addedBy: "", notes: "" },
        { name: "Adobe Express Color Palette Generator & Color Wheel", link: "https://color.adobe.com/create/color-wheel", creator: "Adobe", type: "Colors/Gradients", addedBy: "", notes: "" },
        { name: "mycolor.space", link: "https://mycolor.space/", creator: "Colorspace", type: "Palettes", addedBy: "", notes: "" },
        { name: "Color Palette Pro", link: "https://colorpalette.pro/", creator: "Color Palette Pro", type: "Palettes", addedBy: "Grimm", notes: "Recommended by Ari Karate (firstbaseman)" },
        { name: "Open Source 3D Assets", link: "https://www.opensource3dassets.com/en", creator: "OS3A", type: "3D Assets", addedBy: "", notes: "Shout out to gleam for these assets posted on discord!" },
        { name: "The Base Mesh", link: "https://www.thebasemesh.com/", creator: "The Base Mesh", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Maker Commons Free 3D Models", link: "https://makercommons.psu.edu/free3dmodels/", creator: "PSU", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Public Domain 3D", link: "https://www.publicdomain3d.com/", creator: "Public Domain 3D", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Free CC0 3D Models by ShareTextures", link: "https://www.blendernation.com/2023/09/21/free-cc0-3d-models-by-sharetextures/", creator: "BlenderNation", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Public Domain Stuff", link: "https://makerworld.com/en/collections/3139051-public-domain-stuff", creator: "Maker World", type: "3D Assets", addedBy: "", notes: "" },
        { name: "CC0 Public Domain Free Models", link: "https://sketchfab.com/plaggy/collections/cc0-public-domain-free-models-c1af6539a9ee49f4b3d51fabd6c25a85", creator: "Sketchfab", type: "3D Assets", addedBy: "", notes: "" },
        { name: "55+ Free Public Domain 3D Models", link: "https://creazilla.com/search/3d-model/public%20domain", creator: "Creazilla", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Free Public Domain 3D Models", link: "https://www.turbosquid.com/Search/3D-Models/free/public-domain?dd_referrer=", creator: "Turbosquid", type: "3D Assets", addedBy: "", notes: "" },
        { name: "Dimensions.com", link: "https://www.dimensions.com/", creator: "Dimensions", type: "Reference", addedBy: "", notes: "handy information like dimensions of furniture, buildings, pretty much everything you'd want dimensions for as well as common floor plans. paid plans can download 3d models but there's plenty to get as a free user as well" },
        { name: "AdorkaStock", link: "https://www.adorkastock.com/sketch/", creator: "AdorkaStock", type: "Poses / Stock", addedBy: "", notes: "" },
        { name: "Afro Index", link: "https://afroindex.org/", creator: "Afro Index", type: "Hairstyles", addedBy: "", notes: "Because there's no excuse not to learn how to make black hair!" },
        { name: "The Hairstyler", link: "https://www.thehairstyler.com/", creator: "The Hairstyler", type: "Hairstyles", addedBy: "", notes: "" },
        { name: "Hair Finder", link: "https://www.hairfinder.com/", creator: "Hair Finder", type: "Hairstyles", addedBy: "", notes: "" },
        { name: "Alternative Hair show", link: "https://alternativehair.org/creative-community/", creator: "AHS", type: "Hairstyles", addedBy: "", notes: "" },
        { name: "Fontshare", link: "https://www.fontshare.com/", creator: "Fontshare", type: "Fonts", addedBy: "", notes: "" },
        { name: "Font Squirrel", link: "https://www.fontsquirrel.com/", creator: "Font Squirrel", type: "Fonts", addedBy: "vampishly", notes: "Added from suggestion below! Also has a font identifier!" },
        { name: "DaFont", link: "https://www.dafont.com/", creator: "DaFont", type: "Fonts", addedBy: "", notes: "FontSquirrel has a good selection as well and more quality free-for-commercial-use fonts" },
        { name: "FontSpace", link: "https://www.fontspace.com/", creator: "FontSpace", type: "Fonts", addedBy: "", notes: "" },
        { name: "1001 Free Fonts", link: "https://www.1001freefonts.com/", creator: "1001 Free Fonts", type: "Fonts", addedBy: "", notes: "" },
        { name: "Google Fonts", link: "https://fonts.google.com/", creator: "Google Fonts", type: "Fonts", addedBy: "", notes: "" },
        { name: "Time travelling with IKEA catalogues 1951-2021", link: "https://ikeamuseum.com/en/explore/ikea-catalogue/", creator: "IKEA", type: "Furniture Catalogs", addedBy: "Grimm", notes: "" },
      ]
    },
    {
      category: "Content Creation - Edit your content thumbnails or stuff for social media!",
      color:    "#ED8DED",
      items: [
        { name: "Canva", link: "https://www.canva.com/", creator: "Canva", type: "Multipurpose", addedBy: "", notes: "Create templates, logos, storyboarding and more for all your content" },
        { name: "Adobe Express", link: "https://adobe.com/express/", creator: "Adobe", type: "Multipurpose", addedBy: "", notes: "Create templates, logos, storyboarding and more for all your content" },
        { name: "Simple Runtime Windows Editor | Tutorial", link: "https://github.com/dtgDTGdtg/SRWE", creator: "SRWE", type: "Screen Capture", addedBy: "", notes: "Use this to take high resolution screenshots" },
        { name: "ezgif", link: "https://ezgif.com/", creator: "ezgif", type: "Multipurpose", addedBy: "", notes: "" },
        { name: "Screen Capture", link: "https://www.screencapture.com/", creator: "Movavi", type: "Screen Recording", addedBy: "", notes: "" },
        { name: "N-Studio", link: "https://nicke.tech/n-studio?migrated=true", creator: "N-Tech", type: "Screen Recording", addedBy: "", notes: "" },
        { name: "OBS", link: "https://obsproject.com/", creator: "OBS", type: "Screen Recording", addedBy: "", notes: "" },
        { name: "Clip Champ", link: "https://clipchamp.com/en/video-editor/", creator: "Microsoft", type: "Video Editing", addedBy: "", notes: "" },
        { name: "iMovie", link: "https://support.apple.com/imovie", creator: "Apple", type: "Video Editing", addedBy: "", notes: "" },
        { name: "InShot", link: "https://inshot.com/", creator: "InShot", type: "Video Editing", addedBy: "", notes: "Easily edit videos to post on social media" },
        { name: "DaVinci Resolve", link: "https://www.blackmagicdesign.com/products/davinciresolve/", creator: "Blackmagicdesign", type: "Video Editing", addedBy: "", notes: "Easily edit videos to post on social media" },
      ]
    },
  ],

  /* ==========================================================================
     5) INFO & TIPS  —  shown on the "Info & Tips" page.

     Tips are grouped by TOPIC. Each topic has a list of tips. A tip looks like:

         {
           text:  "The tip itself.",
           note:  "",   // optional: a small follow-up note
           image: ""    // optional, advanced — see the note at the bottom
         },

     Known topics (the website gives each its own icon): "General",
     "Build Mode", "Paramaker", "Live Mode", "Other Resources/Advert".
     You can also create a new topic name — it will still appear.
     ========================================================================== */
  tips: [
    {
      topic: "General",
      tips: [
        { text: "Detail mask for non-recolorable options, use it if you want to lock in your colors.", note: "", image: "" },
        { text: "There are 4 color zones for every item in game.", note: "", image: "" },
        { text: "You can add additional zones by adding additional meshes to items.", note: "", image: "" },
        { text: "Bisect under the Modelling tab in Blender to cut meshes for resizability.", note: "", image: "" },
        { text: "You can export an OBJ file of your mesh to be textured in Procreate if you have one. The texturing there would be texturing on the model itself. A bit glitchy but gets the job done.", note: "", image: "" },
        { text: "There is no vert limit only what your pc can handle...make it low poly still!", note: "PLEASE PLEASE PLEASE go as low poly as you can", image: "" },
        { text: "You can open the control panel in the Paramaker. CTRL+F2", note: "", image: "" },
      ]
    },
    {
      topic: "Build Mode",
      tips: [
        { text: "Snapping to table can be done by ticking the stack on others on prefab settings", note: "", image: "image33" },
        { text: "The translation menu lets you name the main text, and the \"Patreon name\" box lets you do the flavortext", note: "", image: "" },
        { text: "If anyone is making a mirror, be sure to add \"_Mirrors\" to the tags as well as the normal \"Mirrors\", otherwise the paras will not interact with the mirror correctly.", note: "", image: "" },
        { text: "The mirror surface is a projection of a camera view from the origin of the object, so if you have a mirror that isn't meant to be at the origin (esp wall mirrors) you need to move it to the origin and add an offset in game.", note: "", image: "" },
      ]
    },
    {
      topic: "Paramaker",
      tips: [
        { text: "For making Paramaker items moulded from the body, you can duplicate the parts that you need and then separate it from the mesh.\nThat's how you can make a base for your clothing mesh quickly.", note: "", image: "image38" },
        { text: "Linking the hair to UV2 is not recommended, as it will distort the hairstyle's shape", note: "(To be tested)", image: "" },
        { text: "For equipment in the game (which can be items, props, tables, couches, etc) UV1 is \"how it looks\" and UV2 is needed mainly for the game to understand how an asset behaves like if you wear like clothing for example, how does it stretch/warp/bend on the body, if that makes sense. Some props will need specific UV2s and some like hair you can just clone UV1. Hair doesn't need a custom deformation UV2 the way clothing does, but Paralives still expects all equipment to include a UV2 map.", note: "", image: "" },
        { text: "High poly meshes will inflate the filesize. Try to keep your mesh and textures inline with what exists in the base game.", note: "", image: "" },
      ]
    },
    {
      topic: "Live Mode",
      tips: [
        { text: "Script mods use external scripts to inject content into the game.\nParalives instead had inbuilt modding tools that allow you to do a ton of things other games need script mods for.", note: "", image: "" },
      ]
    },
    {
      topic: "Other Resources/Advert",
      tips: [
        { text: "I (Grimm) was contacted by emuLOAD and they have a website for free/ad-free file hosting at parafiles.net \nIt's invite only to keep the community safe, if interested you can contact them on Discord (emuload/User ID:412515606236233730) or webmaster@parafiles.net", note: "", image: "" },
      ]
    },
  ],

  /* ==========================================================================
     6) TESTING & FINDINGS  —  shown on the "Testing & Findings" page.

     Each entry looks like this:

         {
           question: "The thing being investigated",
           done:     false,   // change to  true  once it is confirmed
           status:   "",      // optional small label, e.g. "Testing"
           findings: "",      // what has been found so far ("" = nothing yet)
           link:     "",      // optional https://... related link
           notes:    ""       // optional extra notes
         },

     Once something is confirmed, set done: true (or move it to the questions
     list above so it shows on the Questions & Answers page).
     ========================================================================== */
  testing: [
    {
      question: "Can you make Sheer Curtains?",
      done:     false,
      status:   "Testing",
      findings: "",
      link:     "",
      notes:    ""
    },
    {
      question: "Where can I find the animations used in game?",
      done:     true,
      status:   "Yes",
      findings: "Noroiko did all the work by uploading all the animations and converted them to FBX files - https://www.nexusmods.com/paralives/mods/167",
      link:     "https://www.nexusmods.com/paralives/mods/167",
      notes:    ""
    },
    {
      question: "How to mod in new recipes/food items into the game?",
      done:     false,
      status:   "",
      findings: "",
      link:     "",
      notes:    ""
    },
    {
      question: "Do we know anything about the Lot Item Layers yet? Is there a way to add custom ones and how can we define the items to spawn?",
      done:     false,
      status:   "",
      findings: "",
      link:     "",
      notes:    ""
    },
    {
      question: "Brain logic on end hasStatusEffect now triggers on start instead for me and the users of my mod - it used to work fine, like on end day1 add day2, now even though these statuses take a day to expire, they trigger on end immediately. I have not changed anything with my mod, it just stopped working. No matter how I add a status effect, it triggers on end immediately",
      done:     false,
      status:   "",
      findings: "",
      link:     "",
      notes:    ""
    },
    {
      question: "Can we translate a mod to different languages?",
      done:     false,
      status:   "Testing",
      findings: "",
      link:     "",
      notes:    ""
    },
  ],

  /* ==========================================================================
     7) MOD COMPATIBILITY  —  shown on the "Mods" page.

     Each entry looks like this:

         {
           name:     "The mod's name",
           creator:  "",         // who made it
           link:     "",         // https://... to the mod (e.g. its Steam page)
           status:   "No Known Issues",  // see the allowed words below
           category: "",         // e.g. "Build/Buy · Chair"  (optional)
           notes:    ""          // what works, what's bugged, any fixes
         },

     The "status" word decides the coloured label and the filter it falls
     under. Use ONE of these (capitals do not matter):

         "No Known Issues" — works fine                 (green)
         "Minor Issues"    — works but has small bugs   (amber)
         "Bugged"          — major problems / unusable  (red)
         "Untested"        — nobody has checked yet     (purple)

     The "category" decides the Category + Sub-category filters on the page.
     Write it as  "Main · Sub, Sub"  — the part before the · is the main
     Category, the comma-separated part after becomes the Sub-category tags:
         "Build/Buy · Chair, Lighting"   "Live Mode · Interaction"
         "Paramaker · Hair"              "Visual · UI"
     Main categories in use: Build/Buy, Paramaker, Live Mode, Visual,
     UI/Translation, Uncategorized.

     THIS IS THE ONLY LIST — every mod on the site lives right here, so you
     just edit this one file.

     HOW TO UPDATE A MOD: find it (Ctrl/Cmd+F by name), change its "status"
     word, and type a message in its "notes".
     HOW TO ADD A NEW MOD: copy any entry, paste it as the first item, and change the words inside the quotes.
     (Optional: add  nsfw: true  to flag an 18+ mod.)
     ========================================================================== */
mods: [
    {
      name:     "Japanese Walls and Floors",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3673927056",
      status:   "Minor Issues",
      category: "Build/Buy · Texture, Door, Window",
      notes:    "Can only see Door and Window, but door doesn't have texture and window tiles weirdly.\nFloor, Wall and Ceiling textures not working."
    },
    {
      name:     "Japanese Living Room Items",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674070711",
      status:   "Minor Issues",
      category: "Build/Buy · Chair, Lighting, Surface, Storage",
      notes:    "Need to search for dresser (Tansu). All show up in game with both chairs and the table not showing any texture. One of the chairs show only white. The textile materials don't show up."
    },
    {
      name:     "Teripi Lounge Chair",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674102129",
      status:   "Minor Issues",
      category: "Build/Buy · Chair, Functional",
      notes:    "Cannot resize. Has resizing arrows but doesn't budge. Sleeping and Sitting interactions don't have end. Need to cancel interaction before they leave."
    },
    {
      name:     "Vegan Alternative Clutter",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674126210",
      status:   "Minor Issues",
      category: "Build/Buy · Kitchen Clutter",
      notes:    "Almond milk does not show texture, only white."
    },
    {
      name:     "Heart Sunglasses",
      creator:  "LéaParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674548916",
      status:   "No Known Issues",
      category: "Paramaker · Glasses",
      notes:    "Thumbnail doesn't show (Known PAM bug)"
    },
    {
      name:     "Royal Crown",
      creator:  "LéaParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674548620",
      status:   "No Known Issues",
      category: "Paramaker · Hat",
      notes:    "Thumbnail doesn't show (Known PAM bug)"
    },
    {
      name:     "SuperHero Costume",
      creator:  "LéaParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674579870",
      status:   "No Known Issues",
      category: "Paramaker · Overalls",
      notes:    "Thumbnail doesn't show (Known PAM bug)"
    },
    {
      name:     "Kidi Furniture Items",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674608388",
      status:   "Minor Issues",
      category: "Build/Buy · Chair, Decor, Bed",
      notes:    "Bean bag chair has white texture, cannot recolor. Canopy loses it's polka dot when changing swatch."
    },
    {
      name:     "Radio Podcasts",
      creator:  "Andrei",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3674706758",
      status:   "No Known Issues",
      category: "Live Mode · Radio",
      notes:    ""
    },
    {
      name:     "Vomit Interaction",
      creator:  "JoubieJoba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3683204637",
      status:   "No Known Issues",
      category: "Live Mode · Interaction",
      notes:    "InteractionGroup_GROUP_Shrubs can be seen when interacting with a shrub to vomit."
    },
    {
      name:     "Rococo Bedroom Items",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3683577667",
      status:   "No Known Issues",
      category: "Build/Buy · Chair, Surface, Decor, Bed, Functional",
      notes:    ""
    },
    {
      name:     "Existential Crisis Shower",
      creator:  "JoubieJoba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3683714233",
      status:   "No Known Issues",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "LittleBusiness",
      creator:  "Draityalan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3692233651",
      status:   "No Known Issues",
      category: "Live Mode · Interaction",
      notes:    "Lightly tested"
    },
    {
      name:     "Peril Lives",
      creator:  "Cyan, Death, Deiruna, Indi, Draityalan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3723337442",
      status:   "Bugged",
      category: "Live Mode · Interaction",
      notes:    "Vague description of mod, only says to start a fire. \nCan't start a fire and there is an all encompassing fog that eats up the scenery."
    },
    {
      name:     "Québécois Language Mod",
      creator:  "ChloeParalives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3729829032",
      status:   "Untested",
      category: "UI/Translation · Language",
      notes:    ""
    },
    {
      name:     "Lovebug Eyes",
      creator:  "The Bluest Player",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738784518",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Gothic Rose Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739797315",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "75% Less Virus Chance",
      creator:  "PeachFrosty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736593489",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Wedding Band",
      creator:  "James Nuts",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738548422",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Frog Pet Bed",
      creator:  "Amy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737874927",
      status:   "Untested",
      category: "Build/Buy · Pet Bed",
      notes:    ""
    },
    {
      name:     "WTA Purgatory PC Game",
      creator:  "TiKayamb974",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737713749",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "MoMa Design Store Pack",
      creator:  "Pietson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739311607",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Storyteller-Ann",
      creator:  "Naps!",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735184969",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "TopHat",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733112120",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Alien Septum Piercing",
      creator:  "Blahberry Pancake",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738006044",
      status:   "Untested",
      category: "Paramaker · Piercing",
      notes:    ""
    },
    {
      name:     "Shampoo Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737290985",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Nap On Couch / Sofa Mod",
      creator:  "luca8fg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733504119",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "Play Skyrim",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736126097",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "SIDEBOARD TABLE",
      creator:  "Trizz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739324903",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Cottagecore Tattoos by YetAnotherCookie",
      creator:  "YetAnotherCookie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738159700",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Broyhill Brasilia Furniture Collection",
      creator:  "EelsInMyAss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735236176",
      status:   "Untested",
      category: "Build/Buy · Furniture",
      notes:    ""
    },
    {
      name:     "Bi Pride Flag Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733677812",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Quick Sleep Recovery",
      creator:  "kms",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734448783",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Custom Photo Everything",
      creator:  "Phoenix662",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735247594",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Blank Faded Oversized T-Shirt",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735845367",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Wear Any Skin",
      creator:  "Crispy Business",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738219776",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Beauty School Dropout Radio",
      creator:  "jayciezakia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735845942",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Watch Art Channel",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737555032",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "\"The Sunlit Garden\" from Revolutionary Girl Utena",
      creator:  "jdps18",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735236700",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "PS5 Pro",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739194834",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Double Pigtail Hairstyle",
      creator:  "cazycreations",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736879405",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "magical tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735686962",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[WIP] Eyeliners (Part 2)",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736623018",
      status:   "Untested",
      category: "Paramaker · Eyeliner",
      notes:    ""
    },
    {
      name:     "Pompompurin Needs UI !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735123036",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "How to Cheat / Get 100k Paradimes",
      creator:  "Nonvul",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733701403",
      status:   "Untested",
      category: "Live Mode · Cheats",
      notes:    ""
    },
    {
      name:     "Windmill",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739621636",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Elf Ears",
      creator:  "Jududu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733414761",
      status:   "Untested",
      category: "Paramaker · Ears",
      notes:    ""
    },
    {
      name:     "[Himsoo] Pillows #1",
      creator:  "Himsoo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737144469",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "Left-Handed Cursor",
      creator:  "Enirac",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735226252",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Triple Simple Empty Terrain",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733542542",
      status:   "Untested",
      category: "Build/Buy · Terrain",
      notes:    ""
    },
    {
      name:     "Smarter Hygiene",
      creator:  "teabit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733138525",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Couch",
      creator:  "meg_kw",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736824089",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "Eyelash Replacements - Nekko",
      creator:  "CodeNekko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733430974",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Dangerous Fires",
      creator:  "NightmareFurbies",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739106751",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Gerard Keay Eye Tattoos",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737647957",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Arming Sword",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739182253",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Eyes 02 - Nekko",
      creator:  "CodeNekko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733478281",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Pastel Needs UI",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734002362",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "改良自主行為",
      creator:  "貓毛供應商",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733708056",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "SimsPlumbob",
      creator:  "Mia_is_a_joke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739236538",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Louise Belcher Toddler Costume",
      creator:  "GUnit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736008992",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Fairy Wings",
      creator:  "Jududu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738083785",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Play GTA 5 in Paralives Mod!",
      creator:  "grumpy4mods",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735063178",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Hair and Eye Genetics Overhaul",
      creator:  "Angry Aki",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735008895",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[CC] [Hair] Iso",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734004108",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No Selected Character Effect",
      creator:  "Dockamorpher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732851084",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Wolverine Hair And Claws",
      creator:  "Dingus",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737084249",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Koazie Calm Emotions",
      creator:  "koazski",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736471993",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "No More Boy Names",
      creator:  "solumand",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736395411",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Pawsome Tattoo Pack",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737784995",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Heated Rivalry",
      creator:  "emziiz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739569060",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Kerbal Space Program Game",
      creator:  "Taimu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734036500",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Medieval Weapon Clutter",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739326782",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Cat Pack! Ears + Tails (Hat) [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735387441",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Eyelash/Highlight Stacker",
      creator:  "fiv3am",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735249727",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Lifespans Proportional to Pregnancy Duration",
      creator:  "buren",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733545287",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Read From Book Clutter Items",
      creator:  "Dizzard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733830590",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Tribal Tattoo V2",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737481818",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Dragon Plush",
      creator:  "Cyan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732695619",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Paralives Shirt - Recolorable Shirt Decal",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734131458",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "Backrooms Textures",
      creator:  "KIRA",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737733205",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Animal Prints",
      creator:  "NyGirl976",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739051349",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Figure Skater Career",
      creator:  "smperez2011",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733552536",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "No School Uniform",
      creator:  "teabit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738353706",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "ParaPlum Pink",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734211268",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "FloristOccupationFix",
      creator:  "HolySlip",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736411547",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Jester Vibe - Random Anger Changed to Amused",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739461021",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Computer Game - Elden Ring",
      creator:  "Torllay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734388170",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "CRUX - Aventurine Hair",
      creator:  "CRUX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735975942",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Sleepy Kuromi Crop Top",
      creator:  "kitthecat13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734215168",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Just Another Realistic Lifespan Mod",
      creator:  "tenna from hit game deltarune",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734685200",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Layered Earrings",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738259408",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Kitchen Cart Pack",
      creator:  "kingfisher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733377854",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "MMK | Modular Modern Kitchen",
      creator:  "genissabadell123",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737687689",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Software Inc Game",
      creator:  "daRedLoCo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733428558",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "VTMB for your Para&#x27;s PC",
      creator:  "ForbiddenSlurp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735795679",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Skyzee Studio - Boho Rugs",
      creator:  "Skyzee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737633688",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Realistic Lifespans (0.2a)",
      creator:  "Simulacra",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733058581",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Cute heart selector mod",
      creator:  "Len",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737131936",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Longer Flounce Skirt",
      creator:  "Simulacra",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739477507",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "More Body Hair Options",
      creator:  "JJ42",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735592400",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Basemental Beer | Polish Translation",
      creator:  "AuroraSky",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740277262",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Traditional French Soap",
      creator:  "Christian",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738146572",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Ellie&#x27;s Tattoo",
      creator:  "TransparentCee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737505581",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "No Camera Auto Height",
      creator:  "Nitro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733187436",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "WinxAishaHair[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736132413",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Play Team Fortress 2",
      creator:  "J",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737838969",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Filmic Looks (Filters Pack)",
      creator:  "G R £ Y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733822212",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Baby: A MakeupMod",
      creator:  "insectgarbage",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737260860",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Beat It Piano Shirt (Michael Jackson)",
      creator:  "rhys",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739102565",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Mango Pillow",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738941880",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "Gothic Purple Rose Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740057487",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Cottage Kids - Bedroom",
      creator:  "Cat",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737729868",
      status:   "Untested",
      category: "Build/Buy · Bed",
      notes:    ""
    },
    {
      name:     "Master Sword Tattoo by LanaDelTaco",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733749870",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Star Piercing",
      creator:  "Shiro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736372099",
      status:   "Untested",
      category: "Paramaker · Piercing",
      notes:    ""
    },
    {
      name:     "[CC Pack] Sage Hair and Accessories",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734165980",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Liquid Soap Dispenser",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734728124",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Isego&#x27;s eyeshighlight",
      creator:  "红焖凶柿",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733304856",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Stella the Dog Mod",
      creator:  "Claire",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736536268",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Supernatural TV Channel",
      creator:  "GenderNotFound",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734639106",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "My TogetheCard: 5 min.speed, instant.",
      creator:  "AFrameAmongPines",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733550756",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Shooby&#x27;s Shorter Pigtails Hair",
      creator:  "shoobyloob",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733570662",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "peachhh24",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739796458",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Cute Ghost Pillow <3",
      creator:  "ThisGuy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739172733",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "Improved Longer Lifespans",
      creator:  "Veiledsnow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733497367",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Cherixberry&#x27;s Toiletry Retexture Pack",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738355551",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "disable build camera shake",
      creator:  "pthulin93",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733743530",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Improved Para Feet &amp; Sandals",
      creator:  "Demi-Demon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738122986",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Gain Astronomy Skill",
      creator:  "KilaFrozt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735566621",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Fruit Colour Tattoos",
      creator:  "Mia_is_a_joke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737600824",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Persona 5 Video Game",
      creator:  "Crypt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733451888",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Basic Mini Skirt",
      creator:  "sawayama",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735759375",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Learn Multiple Recipes A Day",
      creator:  "ChaosGames",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736352654",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Double Simple Empty Terrain",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733540992",
      status:   "Untested",
      category: "Build/Buy · Terrain",
      notes:    ""
    },
    {
      name:     "Sneaker Heels",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733046791",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "No Town Map Blur",
      creator:  "StacySims",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738268588",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Hime Cut Hair",
      creator:  "Nyvrak",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735210103",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Spice of Life",
      creator:  "theferrymanofstyx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734614034",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "1898 Decor",
      creator:  "T_en_M",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736299787",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Practice Logo Design",
      creator:  "TayeSimz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739298812",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Dutch Trash Bin",
      creator:  "Mitsjol",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737645281",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[Karikiri] Short Hair",
      creator:  "kyapakura",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739724729",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Vamparas",
      creator:  "JacobG5",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735929453",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Cringe radio station",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734048246",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "More ways to have fun",
      creator:  "jennisimone",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733387566",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Trans Genders",
      creator:  "Stas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734032826",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Read From Book Clutter Items (1 &amp; 2 Books Version)",
      creator:  "Dizzard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734424305",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Meryl Dress&amp;Two-piece set",
      creator:  "红焖凶柿",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734354508",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Faster Together Cards",
      creator:  "Erevaia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732792225",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Neapolitan Ice Cream Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733194076",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Csipkefüggöny",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740246163",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "Ink of Olympus Tattoo Collection",
      creator:  "PixelPevch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739079373",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Remove Hover Effect",
      creator:  "dive",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733635276",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Blue Moon Selector",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735315510",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "AK-47",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735754560",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Ukrainian Language Mod / Українська мова (Українізатор)",
      creator:  "Panda_renka",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734347573",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Antlers",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733358698",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Chips pack",
      creator:  "Księżniczka_Kitku",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739928065",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "SpiderTable",
      creator:  "Steinfeger",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737156771",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Read Fourth Wing",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735112856",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Rec Room game",
      creator:  "Blue Couch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735626944",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Dresser \"Noir\"",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737553328",
      status:   "Untested",
      category: "Build/Buy · Dresser",
      notes:    ""
    },
    {
      name:     "Vegan Lifestyle",
      creator:  "SasiLavandasi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737115837",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[LEONID] TV Workout",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736017809",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "[KikoVanity]FullFaceMakeUp",
      creator:  "kikovanity",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739126045",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Better Parafolks - Basic Needs + Baby Care",
      creator:  "Pupucaca",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739269704",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Blue, Green &amp; Pink Needs UI Recolor",
      creator:  "neecxle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736353651",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "[Zomb] Tablecloth &amp; Placemats",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736829909",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "No School At All",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735413032",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Asian Paintings 2",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739385481",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "[Fobbit] Idea Hemmes Collection",
      creator:  "Onebie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737450362",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "jurassic",
      creator:  "jhenybouvier463",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739397890",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Sims Onesque Camera",
      creator:  "dootythefrooty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735377798",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Remove Para&#x27;s Cell Shading Outline",
      creator:  "tender sugar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732925933",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "WINGSDG HAIR 20260531",
      creator:  "WINGSDG",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736054389",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "IKEA KALLAX shelf (resizable)",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735053402",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE shelf (customizable)",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736106405",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Skill Notifications Disabled",
      creator:  "TJ",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737009777",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Intimacy Need",
      creator:  "BigBoy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737408304",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Twenty One Pilots Greatest Hits Station",
      creator:  "Caimeimei.",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739454065",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Leopard print TATTOO",
      creator:  "Jellabea",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736350020",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Playable Paralives... In Paralives!",
      creator:  "Fjordson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733086411",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Static Romance Category 1.2",
      creator:  "eirjf4",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738613170",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Outline Tattoos Pack - Vol.5",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734701962",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Shy Vibe",
      creator:  "trashpandacore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733809564",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "DRAPAU",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735856969",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Stoff Nagel Candle Holder 5pcs",
      creator:  "Sandkvist",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740290012",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "NoCensor",
      creator:  "ROB",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732709952",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Slay the spire 2 game",
      creator:  "livingvoid115",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736567646",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Blahaj &amp; Friends",
      creator:  "Armonia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735770302",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "我的房屋",
      creator:  "jenna_clermont",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734376067",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "lake makers",
      creator:  "mr hamz ezio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737234213",
      status:   "Untested",
      category: "Build/Buy · Terrain",
      notes:    ""
    },
    {
      name:     "Para, Your Easel, It&#x27;s Full",
      creator:  "Rabbit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737143060",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "Fun With Instruments",
      creator:  "Alanshor",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734981063",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "[FAIRY] The Headboard",
      creator:  "fairy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739270193",
      status:   "Untested",
      category: "Build/Buy · Bed",
      notes:    ""
    },
    {
      name:     "Fire Interactions Mod",
      creator:  "SacrificialMods",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733420830",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Cyberpunk Catchlights",
      creator:  "Tawksick",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733990466",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Random Actions",
      creator:  "Eryalito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740038886",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Baby Tees by Cosmolojay",
      creator:  "jordan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737792166",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Expanded Fem Sliders (JUN 1st UPDATE)",
      creator:  "NyaTokki",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733901331",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Zodiac Tattoos Pack",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734456652",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Custom Flag",
      creator:  "YIPPEe x3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734758151",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "DD_frasier1",
      creator:  "daydream_58",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737232277",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "BodySlidersExpanded - V4",
      creator:  "boy king dick boss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733037092",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "nofoxgiven_98",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739102840",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Actor Career",
      creator:  "smperez2011",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734316154",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Sunny Melino - Coastal Colors",
      creator:  "Simulacra",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738220392",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Animal Decorations",
      creator:  "Shirotabi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738067162",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "THIERANS",
      creator:  "biophylic",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733265138",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Pride tattoos",
      creator:  "Mia_is_a_joke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737697683",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Eyes 01 - Nekko",
      creator:  "CodeNekko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733317586",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Better Lifespans",
      creator:  "wrecknrule",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732710745",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Midnight Gremlin Snack",
      creator:  "Duckman93",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735488811",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[SHEEP] Succulent set",
      creator:  "sheep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735155404",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Slower Skilling",
      creator:  "teneolupum",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733161064",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "lign置物柜",
      creator:  "昨日秋",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739631286",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "whimsical tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735521288",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Duskwight Face Markings",
      creator:  "Bernie Sanders",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733737565",
      status:   "Untested",
      category: "Paramaker · Face Markings",
      notes:    ""
    },
    {
      name:     "Otimização/Optimization",
      creator:  "Toya Vincent",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733564411",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "Sensible Camera Control",
      creator:  "TwistedMexi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732825585",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Full Control Over Relationships",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733396853",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "More Glasses",
      creator:  "chaoticcylinder",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734690818",
      status:   "Untested",
      category: "Paramaker · Glasses",
      notes:    ""
    },
    {
      name:     "Alien 51",
      creator:  "trashpandacore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733325626",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Faith &amp; Encouragment:Prayer Journal Pack",
      creator:  "Sim_Play_Loraine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736662852",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Toy Woody - Interactive Sheriff Woody from Toy Story",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739645066",
      status:   "Untested",
      category: "Build/Buy · Toy",
      notes:    ""
    },
    {
      name:     "Modern Home Office",
      creator:  "Virne",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738660373",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "[PARAFAIRY] The Daisy Shelf",
      creator:  "fairy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739343329",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Forma Dining Chair | Modern Sculptural Furniture CC",
      creator:  "Katsumiya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738811537",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Dragon Relic Tattoos",
      creator:  "kaera_art",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734910517",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Magical In Nature CC Collection (More To Be Added!)",
      creator:  "aspen707",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739902126",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Owl&#x27;s Flannel",
      creator:  "TheOwlManBranch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737115316",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Weight loss no more!",
      creator:  "MooMoo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734272121",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Increased Base Homework Rate",
      creator:  "TrasherQuackBox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737390509",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "TV Remote",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737293754",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Green Day Radio",
      creator:  "Maplewood",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735747613",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Plock 19",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734465553",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Gothic Red Rose Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740060047",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Moisturizer + Facewash Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737765198",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "arabis",
      creator:  "Felismala",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735862763",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Stratified Heights",
      creator:  "MeadowHearkens",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735755656",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Download the new version Ultra Performance Optimizer V2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733598564",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "FluffyWavyMediumBangs",
      creator:  "Sosobun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734942629",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "fast talk together cards",
      creator:  "sockhead.jpg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733405311",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Mass Death by Old Age",
      creator:  "𓀴",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733190878",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Katoributa (蚊遣り豚)",
      creator:  "Mitsjol",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736500272",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "High Noon Hair",
      creator:  "freshpepperino",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734178241",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Homeschool Your Kids!",
      creator:  "Molotov Zav",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735326332",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Crackhead Clutter",
      creator:  "Scotty_Summers",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734799356",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Play Umamusume on Your Phone!",
      creator:  "Hasty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737557450",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Facial Cybernetics",
      creator:  "Tawksick",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734598919",
      status:   "Untested",
      category: "Paramaker · Face",
      notes:    ""
    },
    {
      name:     "Furry Games - Echo VN",
      creator:  "Iantos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737793563",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Interact Icons",
      creator:  "Mewspa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733192500",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Awkward Together...",
      creator:  "Fjordson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733050164",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Talent: Science Personality Trait - BROKEN",
      creator:  "evermoron",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734329923",
      status:   "Untested",
      category: "Live Mode · Trait",
      notes:    ""
    },
    {
      name:     "Simple Earrings",
      creator:  "Shiro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733680294",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Classic Art Collection",
      creator:  "DizzyMissLizzy_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739299063",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Cyan Needs UI Recolor",
      creator:  "DaemonOfEdenTTV",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735370879",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "Blythe Hair_001",
      creator:  "Alliemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739421840",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Orthographic Camera",
      creator:  "Evanaellio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733210521",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Always Show All Available Wants",
      creator:  "BellaDovah",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736377956",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Faster \"In The Zone\" Trigger",
      creator:  "PeachFrosty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736598307",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Y2K Buns Hairstyle by House of Vesna",
      creator:  "SPR1NG",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739267690",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Lola Hair",
      creator:  "Valley Tulya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740402327",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Stoff Nagel Candle Holder 1pcs",
      creator:  "Sandkvist",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740322334",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Shorter Bob with Bangs Hair",
      creator:  "shoobyloob",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736612405",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "English Translation: &#x27;Nature&#x27;",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737714849",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Myth Alien Shirt - Chstom Shirt Decal",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733888654",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Cartoon Censor",
      creator:  "Bandito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732976076",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "[WIP] Corpse Paint",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739578265",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "NO NEED DECAY",
      creator:  "jakobrisenmay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738630867",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "12 Paras per Household",
      creator:  "squeebiesquish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738624737",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Flag of Mongolia",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735822575",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Slower Time",
      creator:  "Tex666",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734376589",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Lowrise Sweats",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733611512",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "&#x27;Realistic&#x27; Wages",
      creator:  "Zcythe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733007384",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "sweet dreams tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736360578",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "No More Fake Games! | Only \"Among Us\" and \"Outbound\"",
      creator:  "Love_Iden",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736751392",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Mushrooms",
      creator:  "plombis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736485782",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Hooked On You GAME",
      creator:  "Jarlious",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735176374",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "My Additional Job Perks (20 cards)",
      creator:  "AFrameAmongPines",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733549654",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Allie&#x27;s Default Skin",
      creator:  "Alliemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735851725",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Gothic Black Rose Selector",
      creator:  "giù",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740049265",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Hungarian Translation",
      creator:  "dvy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733302647",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Rocking Chair Horse",
      creator:  "Danny Shepard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739215166",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Aurum - Angelic long hairstyle",
      creator:  "AurumS97",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736979116",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Jfashion Makeup",
      creator:  "ruru",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734577244",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "SuperSpeed",
      creator:  "skay_1994",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734127340",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "More Skills for Paras",
      creator:  "buren",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735450046",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "avrum&#x27;s Cute Pattern Pack !",
      creator:  "memeto1239800",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733708844",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Pleaser Heels",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735211011",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Blackout Arm Tattoos",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734444340",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Pastel Emotions and Status Effects [v1.2]",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733597526",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Chaos story cards pack - Cards Pack with negative effects",
      creator:  "JulieBlack",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735531422",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Asian Paintings 1",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739384420",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Mirror Interactions Mod",
      creator:  "luca8fg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736533280",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Unicorn Plushie",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736676739",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Police &amp; Miltary Careers!",
      creator:  "fituflautaasas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734023919",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Sweet Treat Tattoos",
      creator:  "YetAnotherCookie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738660210",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "STRIKES",
      creator:  "jakobrisenmay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738631024",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "[LEONID] Kids Can Exercise",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736383547",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "WinxTecnaHair[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736133118",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Feyre Bargain Tattoo",
      creator:  "kaera_art",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735707270",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "More Content for Emotions",
      creator:  "𝑫𝑰𝑺𝑪𝑶 Ronexon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733341387",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "No Fade Mod",
      creator:  "Dockamorpher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732846284",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Computer Game - Death Stranding",
      creator:  "Torllay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734456247",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Parámon Eeveelution Cards Clutter",
      creator:  "Nova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736037733",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Union Jack Flag",
      creator:  "Ticksy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734361318",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Model Carrier",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734489899",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Gothic White Rose Selector",
      creator:  "Аскель",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740036142",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Gothic Pink Rose Selector",
      creator:  "lotisa.alkyone",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740055001",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Cotton Candy Needs Recolour! /ᐠ｡ꞈ｡ᐟ\\",
      creator:  "Fr0gz-R4ve",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735292327",
      status:   "Untested",
      category: "Build/Buy · Recolor",
      notes:    ""
    },
    {
      name:     "Use Interactions for more items (BETA)",
      creator:  "Duckman93",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736161390",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Better Bills",
      creator:  "Astro_Dove",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738899003",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "快一點的*1倍",
      creator:  "Nitro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733160146",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Learnable Biology Skill",
      creator:  "Nova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733762397",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Gold Stylish Watch",
      creator:  "GlitterberryFly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733902069",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Disco Elysium PC Game",
      creator:  "ForbiddenSlurp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735908618",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "avrum&#x27;s Pride Flags !",
      creator:  "strawberry-transneu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733394652",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Enable Madam Crow Dress",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734984254",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "[shirosecub] Goth makeup vol 2",
      creator:  "shirosecub",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736865744",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Sequins and Lace Pattern Pack",
      creator:  "lorinorear",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734217105",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Paramaker Zoom In Further (Eyes)",
      creator:  "itapanini",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739143435",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Short &amp; Sweet Tall Boots [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736046314",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Tribal Tattoo V1",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737480756",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Real Engineering Jobs",
      creator:  "HalfSpace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734185008",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "ParaBush",
      creator:  "icananas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734594659",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Sensible Camera FOV",
      creator:  "Rainey",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734321152",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Always visible - Shelves and cupboards",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738047875",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Extra Variations for Eyebrows 11",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738085331",
      status:   "Untested",
      category: "Paramaker · Eyebrows",
      notes:    ""
    },
    {
      name:     "Call A Taxi: Functional Cab Calling",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737005605",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "BriCheese&#x27;s Pirate Flag",
      creator:  "BriCheese",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737574426",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[CC] Torn Rugged Sweater",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733619463",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Ikrea - Docksta",
      creator:  "Frangi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735971261",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "More than 8",
      creator:  "Sheaki",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733978298",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Baggy Denim Shorts by Cosmolojay",
      creator:  "jordan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735913650",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Lace controller",
      creator:  "zebrafan12",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735643775",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Industrial ear",
      creator:  "sans",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737265979",
      status:   "Untested",
      category: "Paramaker · Piercing",
      notes:    ""
    },
    {
      name:     "Thirteenth Doctor T-Shirt Variant",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737064235",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "{luuvis} Maria&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739719281",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Kuromi heart selector",
      creator:  "Len",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737697762",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "June Hair [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737663235",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Game Room Collection",
      creator:  "kingfisher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735299780",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "English Translation: Set One",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738133588",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "ParaStream Library: Guild Wars 2",
      creator:  "Saskia2993",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736776451",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "[OPTIMIZATION] Bald Optimizer",
      creator:  "6xvl",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733656468",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "lesbian tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736880477",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Ikea FRÖVÄXT Vase",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738394252",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "IKEA Lack Tables",
      creator:  "Claire",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735176280",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Mushroom Lamp By Vivi",
      creator:  "Vivi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739725836",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "vocaloid radio",
      creator:  "Goro Akechi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736886303",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "NA Wall Outlets and Switches",
      creator:  "BobGrey",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733915292",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Big Hoops Piercing Set",
      creator:  "DivinityArt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735427655",
      status:   "Untested",
      category: "Paramaker · Piercing",
      notes:    ""
    },
    {
      name:     "WinxBloomHair[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736132671",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Baby Bundle Set",
      creator:  "theferrymanofstyx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736601545",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Z&#x27;s Mini Alt Makeup Pack",
      creator:  "itshalstri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735299295",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Para Needs Adjustments",
      creator:  "Nekotaku",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739940717",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Mystical Vibe",
      creator:  "Lala",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734649306",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Kinoko Stuff",
      creator:  "FasterThenDoom",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737802337",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Play Minecraft",
      creator:  "pinks0up",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734617502",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Full Eye Cover Makeup",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735938124",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Debug Objects Category",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734430545",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Tattoo Pack 2",
      creator:  "LL0N3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739218942",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "00s MTV - TV Channel",
      creator:  "M3DUSV",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738098455",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Flower Stem Ink by CocoGames",
      creator:  "cocoellean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733561889",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Heidr Eyes - JuniperHollows",
      creator:  "weeviljester",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736622481",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Lil&#x27; Guy Plant Pot",
      creator:  "Mafloppi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734558165",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Learn Biology",
      creator:  "mege",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734062710",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Milk Crate",
      creator:  "coryanotado",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733919439",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Play Maplestory",
      creator:  "GenderNotFound",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734185953",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "[Deprecated] Lockable Doors [Requires BepInEx Plugin]",
      creator:  "Zeliktric",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735905631",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Pink Needs",
      creator:  "lia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734379867",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Different Font Rugs",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737563664",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Bedhead Messy Medium Hair",
      creator:  "GUnit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736169823",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Pomegranate Candle",
      creator:  "ashbestos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738353358",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Real Lifespans and Storyteller",
      creator:  "AlienXtream",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735945981",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Eternal Night",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734093927",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Flowery Top",
      creator:  "oro121",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734853631",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "[New Skill: Jumping] + Hopscotch gives Fitness",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734599096",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Together cards pack for children v0.1",
      creator:  "пантЕра",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734960650",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "[Baralives] Better Pec Slider - V1",
      creator:  "boy king dick boss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735722244",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Tattoos of Tom",
      creator:  "Zerocub",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734663514",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Nautical Tattoo Pack",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734453713",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Jarra Tupperware",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737207008",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Any Pronouns",
      creator:  "RAYTRAC3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732719077",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Eye Studio - Daydream Eyes (Add-on)",
      creator:  "itapanini",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740214270",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Blood Moon Card Pack - Negative Story Cards",
      creator:  "HermanTheDragon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735954333",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Kewlox system",
      creator:  "Jolisa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738014922",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Better Autonomy",
      creator:  "kalajson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738019571",
      status:   "Untested",
      category: "Live Mode · Autonomy",
      notes:    ""
    },
    {
      name:     "Alternative Eyeliner From Game Files",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735249782",
      status:   "Untested",
      category: "Paramaker · Eyeliner",
      notes:    ""
    },
    {
      name:     "Traditional Tattoos",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734777930",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "WindChimes",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739257396",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Traducción al Español (España)",
      creator:  "Noxvern",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733860541",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Desk wardrobe",
      creator:  "Virne",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738174085",
      status:   "Untested",
      category: "Build/Buy · Wardrobe",
      notes:    ""
    },
    {
      name:     "Yara Bubble Braids",
      creator:  "jeseroba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739776609",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Flame Shirt - Custom Shirt Decal",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733620184",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Samurai_Hair",
      creator:  "把克里斯Daddy淦成夹心泡芙",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740428164",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Faeryf1re&#x27;s Cutesy Poses",
      creator:  "Arwen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738709602",
      status:   "Untested",
      category: "Paramaker · Poses",
      notes:    ""
    },
    {
      name:     "Retexture-able Columns",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735064219",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Manga Tattoo Vol 1",
      creator:  "Masku⁶₆⁷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733775227",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "fineline tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735859793",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Play Deep Rock Galactic on PC",
      creator:  "Regular Human Bartender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734385998",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Play Baldur&#x27;s Gate 3",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733084420",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "2000s FlipPhone/PsP Default Replacement",
      creator:  "Leya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739986291",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Map Icons Recolored",
      creator:  "J_Whatever",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737149873",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "The house near the train station火车站小屋",
      creator:  "Lyra·D·Malfoy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736119711",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Night Flight: Owl accessories!",
      creator:  "asteriddle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738683690",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Fascia: Top Cut Out",
      creator:  "zaczoix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736279267",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Low Waist Flared Jeans",
      creator:  "sawayama",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737929127",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Realistic Lifespans",
      creator:  "dirty dan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733171310",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Expensive candles, frames, and paintings",
      creator:  "Phoenix662",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735139595",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "No Bloom by AnWuSims",
      creator:  "AnWuSims (Delamain)",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735109997",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Modern Cabinets &amp; Counters",
      creator:  "zillieness",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736478566",
      status:   "Untested",
      category: "Build/Buy · Counter",
      notes:    ""
    },
    {
      name:     "Türkçe Yama",
      creator:  "thesimit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733398792",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Pompompurin Character Selector !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735080883",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Together Cards Pack #1 by thatssojordy",
      creator:  "thatsssojordy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733191116",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Angel Wing Hairclips!",
      creator:  "Ais",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736359482",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Set of 5 \"Pop Retro\" Lamps",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736062688",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Mirror in Paramaker",
      creator:  "Westrany",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736476409",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "SmallEndTable",
      creator:  "Luuca",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735126033",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Deb of Night Radio - VTMB",
      creator:  "ForbiddenSlurp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737225147",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Bolero Top",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736216512",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Even More Together Cards",
      creator:  "Mondo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737644365",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Skill Buddies",
      creator:  "Melina",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734458835",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Cora Hair",
      creator:  "y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736892904",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "ah00b Sugar Hair Conversion",
      creator:  "bye sexual",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739986617",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Wavy Swept Back Hair",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735981546",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "one house",
      creator:  "dezpitt214",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739543628",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "[CC] [Hair] Half-up Medium Bun (with fringe)",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736631009",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Cocktail Shaker",
      creator:  "Caitee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734840504",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Expanded Outfit Categories",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733143658",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Lab Research Kit",
      creator:  "guimero64",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733199265",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Realistic Prices for Lots, Building, and Bills",
      creator:  "dirty dan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733171603",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "No More Muscle Changes",
      creator:  "Adipup",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739800028",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Darker Nights",
      creator:  "JumpyJuice",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733985990",
      status:   "Untested",
      category: "Visual · Environment",
      notes:    ""
    },
    {
      name:     "Functional Medicine Mod",
      creator:  "luca8fg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736553803",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "skin anime",
      creator:  "apleepi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739372253",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "CRUX - Welt hair",
      creator:  "CRUX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739105990",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Boho Tattoos",
      creator:  "YetAnotherCookie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739926296",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Boopable Snoots",
      creator:  "asterchimera",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740206405",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Cheaper by the dozen",
      creator:  "viniceus_f",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733370123",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "{Life is Strange Tattoo Pack}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738360088",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Big Modern Windows",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736921235",
      status:   "Untested",
      category: "Build/Buy · Window",
      notes:    ""
    },
    {
      name:     "&#x27;Woodcut Style&#x27; Tattoos Pack",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734374542",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Faster Energy Replenish",
      creator:  "alanidmc",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732978563",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Loofah Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738358133",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "PARAKEA - Dining Room Set",
      creator:  "HAUSOFNANDO",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734993921",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Science of It All",
      creator:  "lasagnanoises",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735377351",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Together Cards",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733826562",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Water Cooler",
      creator:  "dootythefrooty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735326810",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Vibrant Needs",
      creator:  "Grindsta",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735059664",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Voubi Bus",
      creator:  "rena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737740085",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Sweatpants",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217715",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Cinnamoroll heart selector",
      creator:  "Len",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737703376",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Skills Book",
      creator:  "༺☆𝔑𝔞𝔱𝔥𝔞𝖓",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736651393",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Karsite weave tattoo",
      creator:  "Zombrigit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737143447",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Andrew Tattoo Set",
      creator:  "MooMoo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737874878",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Bun Hair 1",
      creator:  "y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737426606",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Play Mario",
      creator:  "G R £ Y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734368794",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Booty Shorts | Gymwear",
      creator:  "DivinityArt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733203569",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "{The Last of Us Tattoo Pack}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738360578",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "{luuvis} Candela&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738548556",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Alan Wake - The Storyteller",
      creator:  "HERALD OF DARKNESS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734789526",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Playable New Day",
      creator:  "just a fellow girl gamer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734228007",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[Meira]Face Scar Collection",
      creator:  "Meira",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734846363",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "ParaGens_LeggingsCoverTheGens",
      creator:  "zmazuku",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736174923",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "American Horror Story in TV",
      creator:  "Patros",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737603990",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "(Decorative) String Worms",
      creator:  "J8KEY",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737252244",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "121",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740013653",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Watch Steven Universe",
      creator:  "Kiji Inu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734974962",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Longer Curls Hair",
      creator:  "Bog Mare",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733458862",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "3D Lashes",
      creator:  "Mintexce",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734521702",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Britney Spears Megamix",
      creator:  "LCJDzia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735784374",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "PARAKEA Living Room Set",
      creator:  "HAUSOFNANDO",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735781577",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Plant Interactions Overhaul",
      creator:  "StepStep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734903563",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Werewolf Parafolk - Parawolves",
      creator:  "Tarruvi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734115947",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Orc Tusks",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732799493",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Mayoi Ayase Hairstyle",
      creator:  "majimaP",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736365210",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "2mooncat logo Tattoo",
      creator:  "lorkayley09",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737420255",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Vibe Zen (v0.3)",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736223868",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Real Honk Apocalypse",
      creator:  "Duncanois",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738123662",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "New vibe: Bad to the bone (WIP)",
      creator:  "JulieBlack",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738450005",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Celestial Wall Decor Collection [Ruto]♡",
      creator:  "Ruto",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739475789",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Wing1",
      creator:  "SparklingArsonic",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737671754",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "City Items",
      creator:  "Ashlynn",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734150879",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Smaller Grid",
      creator:  "Clutzmut",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733605423",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Kids Can Cook",
      creator:  "pandorainabox123",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736921334",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "X Marks the Spot - A censor mod",
      creator:  "Zevranigans",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735839268",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Ancient Eyes Highlight",
      creator:  "Raikai",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734488862",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "SIMS CAM",
      creator:  "Sansar9",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737914104",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "er",
      creator:  "Gadget-HR-1980",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735673452",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "3D Printer Decor",
      creator:  "Sir Red Alfredo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734946418",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Jerk Chicken Takeout",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738953049",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Gale Dekarios&#x27;s Netherese Orb",
      creator:  "rachiefish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735722104",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Mini Skirt | Kittenela",
      creator:  "kittenela",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735016896",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "RussianLanguage",
      creator:  "Meido no Hitsuji",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732853121",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Japanese translation -日本語翻訳-",
      creator:  "コウザキ",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733251463",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Monster Energy Snack",
      creator:  "Patros",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737643504",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Clown Girl Tattoo",
      creator:  "camilaamanciox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740457448",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[Sveut-CC]_MasculineHairCollection01",
      creator:  "Sveut",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738747051",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "CzechLanguage",
      creator:  "kulový BLESK",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733313494",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Read Percy Jackson Series",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735489723",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Kawaii Dagger Tattoo",
      creator:  "BIOSmemory",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734353698",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Halter Top",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217092",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Escape from Tarkov Game",
      creator:  "snugfin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734175758",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Uncensored",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733810197",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "365 day mod",
      creator:  "Andy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736644262",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Play AITSF",
      creator:  "Counterfeit Catboy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733469882",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "«Gothic Mystery» Items Pack",
      creator:  "Admiral.Slowpoke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736987806",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Sun &amp; moon tatoos",
      creator:  "Mia_is_a_joke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737159762",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Triangle Shades",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734278709",
      status:   "Untested",
      category: "Paramaker · Glasses",
      notes:    ""
    },
    {
      name:     "Five Tattoo Set",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734322734",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Cat Beanie by Cosmolojay",
      creator:  "jordan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740013385",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "No Fires",
      creator:  "Odrez",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736962767",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Gym Shorts",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736216904",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Radio Station: Strange Dr. Weird",
      creator:  "gnomeherbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733720558",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Customisable School Uniform Mod",
      creator:  "pandorainabox123",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737541235",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Always visible - Mirrors",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737984877",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Kitchen Awakening | Interactive Appliances",
      creator:  "BigBoy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733437713",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Fruits and Veggies Patterns",
      creator:  "Marie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734394774",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Long Curly Hair 1",
      creator:  "y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740414530",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Christian Ichthys (Jesus Fish) Tattoo",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737160109",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Grifter&#x27;s Bone Oversized T-Shirt",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735873314",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "koi",
      creator:  "viseria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735568712",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cool Round Glasses",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734261922",
      status:   "Untested",
      category: "Paramaker · Glasses",
      notes:    ""
    },
    {
      name:     "Fluid Philosophy Chair",
      creator:  "Chih",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734003722",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Camisa do Corinthians",
      creator:  "Rogerinho do Ingá",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733533956",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Radio +",
      creator:  "blue em",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739724171",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Tomb Raider",
      creator:  "Larzrr",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736681503",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "motif cadre",
      creator:  "icananas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735714989",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Cute Tray Collection",
      creator:  "KimchiRamen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737390362",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "{luuvis}ShortBangsHair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736838097",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "My Relationship complete labels",
      creator:  "AFrameAmongPines",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733550662",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Abyssal Sovereign Horns",
      creator:  "Emcie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737775131",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Picia Buildworks: Pipes &amp; Gutters",
      creator:  "Picia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739948942",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Real-Day Lifespans (OUTDATED)",
      creator:  "Simbot34",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733481031",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Breeze Block Fence 02",
      creator:  "Molotov Zav",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735366908",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No more clown hate",
      creator:  "Toast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735104981",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Shakespeare tattoo",
      creator:  "srtaburbujita",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733579523",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "True American Units",
      creator:  "Ser Drikanyx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733225314",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "More Occupations - Cybersecurity",
      creator:  "Azeryth",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733579295",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Bunny Decoration",
      creator:  "Shirotabi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735107337",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Dragon&#x27;s Demon Eyes Highlights",
      creator:  "krystal_dragoness13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737170347",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "A Real Handfull",
      creator:  "CleanYoMan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738390246",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "More Together Cards",
      creator:  "plumlace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737977424",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Yakuza Like a Dragon Irezumi Pack",
      creator:  "Masku⁶₆⁷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733470229",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Enchanced Textures - Kitchen Set",
      creator:  "Haruzits",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734618468",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "mausmaus eyes DEFAULTS",
      creator:  "JenX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738413664",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Sunny Character Selector",
      creator:  "catskins",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734012792",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Outline Tattoos Pack - Vol.4",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734168669",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Polaroid Frame",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740073559",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Blue Needs UI",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732831726",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Fun Need Overhaul - Updated",
      creator:  "javaSketch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733568953",
      status:   "Untested",
      category: "Build/Buy · Overhaul",
      notes:    ""
    },
    {
      name:     "Flip_Flop1_JaruS",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734874256",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "[Zomb] Bathroom Clutter",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735917508",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Paratendo Pii",
      creator:  "IT-Art",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740201494",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Pink Needs UI",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732976897",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Vinyl Character Selector (PINK)",
      creator:  "catskins",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734047668",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Purple Moon Selector",
      creator:  "PeachyArtist",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735318019",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "More Pronouns",
      creator:  "sammorallee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733876890",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Rose Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739688060",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "GOOB&#x27;s {GOTH} Make-Up Pack",
      creator:  "Goob",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739204444",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Poké Balls",
      creator:  "Chokolato",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738190026",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Asian Paintings 5",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739386786",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Dungeon Crawler Carl - Carl&#x27;s Jacket",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738882873",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Fishnet Gloves (Long)",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737202248",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Cities: Skylines II Game",
      creator:  "CodiakTheKodiak",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734578832",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Chances Of Twins And Triplets Are Higher",
      creator:  "Sass You",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739993293",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "{luuvis} Grace&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739078921",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "USA Flag",
      creator:  "KaylaThePeasant",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734157473",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Shut Up And Drive: Functional Cars",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737620240",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Buisiness Casual Top",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736216639",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Better Fast Forward Sound - No More Grating Fast Forward",
      creator:  "TrasherQuackBox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736703316",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "TurkishTranslation",
      creator:  "JackLondoN",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737514069",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Flower Patterns 01 [JustCley]",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737059741",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "365 day mode v2",
      creator:  "TheBrownMamba12",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737180980",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "population auto refill",
      creator:  "Mike Trout",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734850609",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Emotional Needs",
      creator:  "pizzapocalypse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736587536",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Ikea Billy Bookcase",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736731100",
      status:   "Untested",
      category: "Build/Buy · Bookcase",
      notes:    ""
    },
    {
      name:     "No Personality Please",
      creator:  "rumours",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736994769",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[shirosecub] Goth Makeup vol 1",
      creator:  "shirosecub",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735085435",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Play Dead By Daylight",
      creator:  "oDeadlyNiteShade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734654443",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "\"La Fresa\" Hair Brush (Thin)",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736926295",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Pongan Caifanes",
      creator:  "psidiumguava",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735293366",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Pup Mug",
      creator:  "eu4hxria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735320915",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair Maggie  (read description)",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735799813",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Cinnamoroll Needs UI !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738100385",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "HAIR CC - Joline",
      creator:  "Mrs.Heart<3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738981151",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Higher bills",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733986073",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "japanese mug",
      creator:  "arison0212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739176775",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Aurum - Banana Snack",
      creator:  "AurumS97",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737103754",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cooking Pro",
      creator:  "blams",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735717715",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Hello Kitty Character Selector!",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737581759",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Hair tie",
      creator:  "James Nuts",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738548345",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Item Series: Maxwell The Cat!",
      creator:  "☣Chaotic_Rem☣",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734848357",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "K-Pop ATEEZ Radio Station",
      creator:  "dog",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736098163",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Crucifix",
      creator:  "Danny Shepard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739935551",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Carnivorous Plants",
      creator:  "Pietson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737645627",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Ethereal Horizons Calm Piano and Ambience Soundtrack",
      creator:  "把克里斯Daddy淦成夹心泡芙",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735468622",
      status:   "Untested",
      category: "Visual · Audio",
      notes:    ""
    },
    {
      name:     "Edit Venues",
      creator:  "Iron Seagull",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3730507506",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Pooklet - HQ Eyes (Sims 2 Conversion)",
      creator:  "Pooklet",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739167794",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Vanity Mirror",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736443202",
      status:   "Untested",
      category: "Build/Buy · Mirror",
      notes:    ""
    },
    {
      name:     "Big Family House",
      creator:  "mujkijpromsiyt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739286163",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Neon Tropical Pattern",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733343736",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Malea&#x27;s Vase",
      creator:  "BBL HIZZY_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732930790",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Paymoneywubby Stream",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733490812",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "The Band of Worship Radio Station",
      creator:  "eniac",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740458005",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Quicker Alien Signal Decryption",
      creator:  "J_Whatever",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736103098",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "together card unlock",
      creator:  "mariahpretty1",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732994583",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Bold Pink Selector Circle",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735241005",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Inscryption game",
      creator:  "livingvoid115",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736566933",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Less Ambient Lighting",
      creator:  "JumpyJuice",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738216890",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "iPara Mirror",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736308348",
      status:   "Untested",
      category: "Build/Buy · Mirror",
      notes:    ""
    },
    {
      name:     "Sötétítő függöny 3x1",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740247794",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "Computer Game - Crimson Desert",
      creator:  "Torllay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734847706",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Disable Censor",
      creator:  "I wanna Bangkok",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734259054",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Bathe Babies",
      creator:  "Link01000",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733435940",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Fanciful Paintings",
      creator:  "Loony Lunar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736838553",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Game - Harvest Moon",
      creator:  "Mr. Bored",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737495868",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Cat Decoration",
      creator:  "Shirotabi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734918689",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Brushing Teeth: Most People Do It",
      creator:  "Rabbit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738914153",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Edit Town Events and Lot Item Layers",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733612786",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Superstar by themooncycle",
      creator:  "themooncycle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734455358",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Default Boxers &amp; Panties",
      creator:  "troppe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736669498",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Medium Length Blowout by Kismet",
      creator:  "made.by.kismet",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740046670",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Flowy Danceboard",
      creator:  "Norin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736988518",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Simple Horn Pack",
      creator:  "itapanini",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738705847",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "[SHHEP] Basic Mailbox",
      creator:  "sheep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733818079",
      status:   "Untested",
      category: "Build/Buy · Mailbox",
      notes:    ""
    },
    {
      name:     "Bold Eyeshadow",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736627283",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Bills Disabler",
      creator:  "raybreeder7",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734498547",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Traditional Chinese translation",
      creator:  "Meow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733928095",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Bar Blade",
      creator:  "Caitee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736052504",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Switch Households Lists",
      creator:  "spookkyfoxx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734179784",
      status:   "Untested",
      category: "Live Mode · UI",
      notes:    ""
    },
    {
      name:     "{Ellie&#x27;s Tattoo}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737296302",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Supernova Eyes by myshunosun",
      creator:  "myshunosun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735729372",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Piercing for Teen",
      creator:  "🐷 Pipupko 🐷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736750392",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "EndTable",
      creator:  "Assiatik",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739312647",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Dust Sprite Lamp",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735876862",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair \"DoubleBounded\"",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737563080",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Summer_Hat1_JaruS_new",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735533048",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Band-Aid Clips",
      creator:  "Ais",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736873271",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Pregnancy Tweaks (Lowered Need Caps)",
      creator:  "pansy_picnics",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734856742",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Diaper Change Fixed",
      creator:  "kms",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734468283",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "Play Baldur&#x27;s Gate 3",
      creator:  "themadammelanin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734595007",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Splatter",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740105266",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Colourful Emotions",
      creator:  "Paperbark",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733499728",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Stylized Eyelashes 01",
      creator:  "Simsefin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734705098",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Miffy!",
      creator:  "up-the-hill",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737301447",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Free Bus",
      creator:  "EnkiSchmidt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733059449",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "f1",
      creator:  "alexiajoachim0811",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739058253",
      status:   "Untested",
      category: "Build/Buy · Vehicle",
      notes:    ""
    },
    {
      name:     "Stackable Pallet",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737068075",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Geek Lifestyle Pack",
      creator:  "ulmarei",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738775804",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair \"Pigtails\"  [Updated]",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735480536",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[EXPERIMENTAL]Pointy Ear Slider",
      creator:  "fiv3am",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734490314",
      status:   "Untested",
      category: "Paramaker · Ear Slider",
      notes:    ""
    },
    {
      name:     "Edit Para",
      creator:  "Lux Arcana",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735054538",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Jamie&#x27;s Hair",
      creator:  "James Nuts",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738158088",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "AO3 - If there is a screen it will be seen + Writing Skill",
      creator:  "RoxanneWrites",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734702735",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Mushrooms - BROKEN",
      creator:  "plombis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736472339",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Man Face Censor",
      creator:  "Via",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733138866",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Breakup!",
      creator:  "Lyss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736226185",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Akari&#x27;s Witchy Wares",
      creator:  "Akari_Enderwolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734665934",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Weird Dresser",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736651092",
      status:   "Untested",
      category: "Build/Buy · Dresser",
      notes:    ""
    },
    {
      name:     "Steezy Skateboard",
      creator:  "Norin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736646972",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Faster Autonomy",
      creator:  "PyroMcDips",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733387235",
      status:   "Untested",
      category: "Live Mode · Autonomy",
      notes:    ""
    },
    {
      name:     "Beard Trophy",
      creator:  "Pietson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736327757",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "Rosie Spiky Twin Tails",
      creator:  "jeseroba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738677165",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[SHEEP] Pile of books",
      creator:  "sheep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735055282",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Tshirt",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739670504",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Black n White Needs UI",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733998780",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "vi&#x27;s face tattoo (arcane)",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735702100",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Oval Coffeetable",
      creator:  "Samsoninan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740347923",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Underwear for Teenagers",
      creator:  "troppe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737721116",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Better Lighting Darker Shadows by AnWuSims",
      creator:  "AnWuSims (Delamain)",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735085004",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Vase",
      creator:  "BBL HIZZY_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732930495",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Bunny Ears Pack: Ears + Tail (Hat) [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735432505",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Height sliders extended!",
      creator:  "Skeleton_Dream",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734832732",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "{Avatar Tattoo Pack}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738359863",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Extra Games - Bloodstained: Ritual of the Night",
      creator:  "Iantos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738959346",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Chainmail Pattern",
      creator:  "Lenny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736982209",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Knotless Braids by Cosmolojay",
      creator:  "jordan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733045769",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Crowley&#x27;s snake TATTOO // Good Omens",
      creator:  "Jellabea",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737468245",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "HumanFaceFreckleFew",
      creator:  "Varos60",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733920023",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "{luuvis} Faeriel&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737684109",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Flag of Türkiye",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735141337",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Dish Soap",
      creator:  "newfie.nif",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735992145",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cute Tattoed Boy reupload",
      creator:  "Y&#x27;ala Paralives",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733486553",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Unalome Tattoo",
      creator:  "angelicolaangels",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739305053",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Fantasy Cherry Bloom Park",
      creator:  "Silver Lynx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734294141",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[LEONID] No Autonomous Daydream",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734160581",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Toddler Hair Conversion Pack V1",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737945905",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Camera Floor Movement No More!",
      creator:  "Creative Jamie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734753325",
      status:   "Untested",
      category: "Build/Buy · Floor Texture",
      notes:    ""
    },
    {
      name:     "Realism Lash Pack",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733560132",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Ikrea - MLAM - Nightstand",
      creator:  "Frangi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736372068",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Faster Cooking",
      creator:  "null",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734068434",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "ParalivesGifMod",
      creator:  "Yusteek",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735722919",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Ribbon Skirt V.1",
      creator:  "Broken_bee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735306593",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Blocksperson (Costume)",
      creator:  "maxtron95",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738013018",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Button Down Tie/Bow Tie Recolor Fix",
      creator:  "shoobyloob",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740051951",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "AutoSkip Cards",
      creator:  "erick.franceschetto",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732748308",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Girly Top | Kittenela",
      creator:  "kittenela",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734741513",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Lifespans by Delijume",
      creator:  "Delijume",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733619756",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "cross tattoo",
      creator:  "Britzawg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734788711",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Play Red Dead Redemption 2",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736148793",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "HumanTTPoseSet1Animation",
      creator:  "stressiex",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736884977",
      status:   "Untested",
      category: "Paramaker · Poses",
      notes:    ""
    },
    {
      name:     "繁體中文 (需要另外下載字型包)",
      creator:  "Raellen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733227166",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Farmstead",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739842139",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "CD Mirror",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733256109",
      status:   "Untested",
      category: "Build/Buy · Mirror",
      notes:    ""
    },
    {
      name:     "rap radio station",
      creator:  "st4rf1sh",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735586532",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Isego&#x27;s hair",
      creator:  "红焖凶柿",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733214353",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Beret",
      creator:  "dootythefrooty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734726482",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Starlight FM",
      creator:  "Ticksy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739284997",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Gleamisims&#x27; Fun Patterns Collection",
      creator:  "*The deadliest Meme*",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733213007",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Shima Rin Body Pillow",
      creator:  "A Tomboy With Abs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733077130",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "Apocalypse Gaming",
      creator:  "starmmiies",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734143849",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "SCAR-H",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737616768",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Magyar nyelv",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734007089",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Eyeshadow",
      creator:  "Kandy Kat",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734723893",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Jojo&#x27;s Birthmark Tattoo",
      creator:  "PotoPotato",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733789198",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Smaller Terrain Paint",
      creator:  "ciamaar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736959265",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Classic Rock Radio Station",
      creator:  "Unhuman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735088798",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "PH Table Lamp",
      creator:  "Sandkvist",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739837429",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Tennis Shoes",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738212452",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Fren Head",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733134931",
      status:   "Untested",
      category: "Paramaker · Face",
      notes:    ""
    },
    {
      name:     "Cinnamoroll Character Selector !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736219841",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Orange Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733095845",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Eyepatch",
      creator:  "Jududu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737558323",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Toddlers Can Use Cribs or Sleep Anywhere",
      creator:  "ShineAeterna",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733922934",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Get Paid for Repairs",
      creator:  "anissims",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734922374",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Puppy Mask and Flag",
      creator:  "Etny00",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739518729",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "FullMetal Alchemist Tattoos",
      creator:  "dallasurr",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735178189",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Faster Energy From Sleeping",
      creator:  "PeachFrosty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737714600",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Daydream Eye Kit (Default Replacement)",
      creator:  "itapanini",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739828753",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Curves XL: Body Physics",
      creator:  "Yanomx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740074347",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Pharmacy Jobs",
      creator:  "StellersJayC",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735017325",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "2000s Tech Clutter",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736607293",
      status:   "Untested",
      category: "Build/Buy · Tech Clutter",
      notes:    ""
    },
    {
      name:     "Together Cards Balanced for 0.1 Time",
      creator:  "Red",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740048459",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Beards :)",
      creator:  "Archalium",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737598572",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "Manga Tattoo Vol. 2",
      creator:  "Masku⁶₆⁷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735844262",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Modular Eyelights",
      creator:  "crossy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733723609",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Jewelry Layering",
      creator:  "nadprodukcja_slow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737922953",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "BottleTest",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733081708",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "DvaBombTattoo",
      creator:  "Hatefulgirl",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734617475",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "YellowjacketsChannel",
      creator:  "mooglemania",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734176350",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Vesp&#x27;s Horns",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737090880",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Horizontal Stripes Pattern Pack",
      creator:  "arch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735421834",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Cool Tattoos by Nupfi",
      creator:  "Nupfi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734851176",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "My Melody Character Selector !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735733533",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "More Realistic Dresser Options",
      creator:  "N3ver0bsolete",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737155827",
      status:   "Untested",
      category: "Build/Buy · Dresser",
      notes:    ""
    },
    {
      name:     "RAYTRAC3R PAM Pack",
      creator:  "RAYTRAC3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733901557",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Black and Red Cursor",
      creator:  "Jesse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739848254",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ParaCurio:SharkSlides",
      creator:  "Salem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738791869",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "{Chloe&#x27;s Tattoo}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737296342",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Alternian Astronomy",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734027551",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "DDM LAB : Y2K Gyaru Makeup Set",
      creator:  "ddm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734176921",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Outline Tattoos Pack - Vol.2",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733826894",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Transformers TV Show",
      creator:  "vaporegaster",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735250161",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Skyzee&#x27;s Studio – Boho Rugs Collection Vol.2",
      creator:  "Skyzee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737759341",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "R&amp;RB",
      creator:  "Tsu&#x27;",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736928493",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Life is Strange [Chloe&#x27;s house]",
      creator:  "Mr.Wolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735264334",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Tiles",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739783634",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Platform_Highheels1_JaruS",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736768579",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Black Moon Selector",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735312629",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "(~TA12~) Cornrowed Twists",
      creator:  "TheAngelsCove",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735519384",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Random Assortment of Patterns",
      creator:  "emilyrs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733473908",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Max Verstappen Cardboard Cutout",
      creator:  "Donti",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737981400",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "VideoGameMod-TheSims",
      creator:  "Chawsy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734495992",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "[Default Replacement] SY_DailyEyes",
      creator:  "買東西給阿雪吃",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740024482",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Weight Gain No More!",
      creator:  "MooMoo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735043841",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Latex Gothic Top",
      creator:  "oro121",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735518179",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Interact Icons - Mod Support",
      creator:  "Mewspa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734539458",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Butter Chicken Takeout",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738919438",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Lot Music Anywhere",
      creator:  "Paperbark",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735094711",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Lesbian Pride Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734047243",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Regular Performance Optimizer v2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739109832",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "Vampire Fangs",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733210189",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "ParaDoll - Earth Swimsuit",
      creator:  "ParaDoll",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738948541",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Mothlight Tattoo Collection",
      creator:  "MothyMess",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734234470",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Pink Moon Selector",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735314544",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Fully customizable carpet (read description)",
      creator:  "eurthfish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733862196",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "WavyHairVariant",
      creator:  "Sosobun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734629548",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "x100 Speed Mod",
      creator:  "Bandito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733540392",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Transformation Basic Blocks",
      creator:  "Leya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735628289",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Fourth&#x27;s Tattoo Pack 1",
      creator:  "fourthwright",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735358338",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Multiple Games",
      creator:  "Shanacat",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737552298",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Interactions Have Higher Success Rates",
      creator:  "Sass You",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739883978",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Asian Paintings 4",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739386094",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Population Autofill",
      creator:  "Zevranigans",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734572153",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "No 24-Hour Time",
      creator:  "Cloverleaf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733108705",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Always visible - Lighting",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737983636",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "ShimmerTV",
      creator:  "starmmiies",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733534523",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Car - Volkswagen Fox",
      creator:  "ChiefMaster",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739967087",
      status:   "Untested",
      category: "Build/Buy · Vehicle",
      notes:    ""
    },
    {
      name:     "Play Resident Evil 4",
      creator:  "Pregnant Wesker",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734746063",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Map View Icons Activation Threshold ½",
      creator:  "Arro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737042983",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Change appearance in mirrors",
      creator:  "AbelPlumbob",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735707332",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Play Minecraft",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736138543",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Feather Tattoo",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737162090",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Grand Bookshelf Set",
      creator:  "Doki",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736987794",
      status:   "Untested",
      category: "Build/Buy · Bookcase",
      notes:    ""
    },
    {
      name:     "Pinturas Cottagecore",
      creator:  "Moonlight",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736957396",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Breekon and Hope Round Collar T-Shirt",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737725805",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "[MOSSY] Handpainted Tiles",
      creator:  "mossypixels",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736601157",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Sagged Shorts",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217603",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "шторы",
      creator:  "Lsankun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737144821",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "Build/Live/Character: Background Music: Artist: De&#x27;Jay",
      creator:  "axolt17",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733651733",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Ghibli Bundle #1",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738137249",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Wall Art",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738632246",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Fallout 4 Game",
      creator:  "TheDovahNova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734610692",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Modern Townhouse",
      creator:  "Laluin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736098503",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Slower Personality Level-Ups",
      creator:  "teneolupum",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734329999",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Overall Improvements Mod (OIM)",
      creator:  "JAGamer001",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734154132",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "More Want Slots",
      creator:  "fiv3am",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733575094",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Set of 4 Eyebrows",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739447651",
      status:   "Untested",
      category: "Paramaker · Eyebrows",
      notes:    ""
    },
    {
      name:     "Duviri-Inspired Tattoo",
      creator:  "Criye",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739968396",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE dividers",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736107263",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "No Story Cards",
      creator:  "spookkyfoxx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733321690",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Melino-Sized Simple Empty Terrain",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733551540",
      status:   "Untested",
      category: "Build/Buy · Terrain",
      notes:    ""
    },
    {
      name:     "Depeche Mode &#x27;Sweetest Perfection&#x27; T-Shirt Variant",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737062182",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Plushies",
      creator:  "Vivi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739263645",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Blood Puddle Decal",
      creator:  "starswithoutspace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740076033",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "University Mod",
      creator:  "Topazolite",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737796832",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Desk with a shelf",
      creator:  "Virne",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738047860",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Pink Needs UI",
      creator:  "simplyjayz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732841861",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "5x body slider",
      creator:  "dirty dan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733711173",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Quilt Patterns",
      creator:  "lorinorear",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733650615",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Hide Underwear Under Dresses",
      creator:  "middy399",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733573965",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "fairytale tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735859716",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Wants Don&#x27;t Clear",
      creator:  "BellaDovah",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733795378",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Soft Girl Voice",
      creator:  "Horrid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732918284",
      status:   "Untested",
      category: "Visual · Audio",
      notes:    ""
    },
    {
      name:     "Invisible door (Fix : Invisible wall blocked Parafolk walking)",
      creator:  "polywindy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734937362",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No Distance Fog",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735048580",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Love Roulette V1.0",
      creator:  "MssMing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734535031",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Curly Beard Conversions",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735106458",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Fix Your Marriage",
      creator:  "paladuck",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736510229",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Overwatch Game",
      creator:  "Kiio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734187224",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Always visible - Wall decor and clutter",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738020244",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "No Fade Mod",
      creator:  "Dockamorpher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732843838",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Pop Radio Station",
      creator:  "chronically.rettungszwerg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739012062",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Cyberpunk 2077 Tattoos",
      creator:  "Masku⁶₆⁷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734108030",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "\"La Fresa\" Hair Brush",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736138458",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No Train Motion",
      creator:  "Monochrome Cat Collector",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732944668",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "10 Tattoo Bundle",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739027800",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Show Available Together Cards + No Cooldown",
      creator:  "rumours",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737029578",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Eternal Day",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734080322",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Little Pumpkin Sofa",
      creator:  "JetLag",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735671336",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "Weekly Story Cards",
      creator:  "brendan.cutler1992",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734073158",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Meryl&#x27;s hair",
      creator:  "红焖凶柿",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738415563",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "10 Tattoos Bundle",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739614805",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Bird Wall Deco",
      creator:  "Amy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735440121",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Soft Gui",
      creator:  "Xena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734959215",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Balanced Viruses",
      creator:  "Kiio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734949359",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Trackpad Fast Zoom (Sims 4 Style Camera)",
      creator:  "marissajd29",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733986987",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Redford Beard",
      creator:  "Ghoul",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737170209",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "No Shake On Place",
      creator:  "Sophia_Luvza",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739425744",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Body Wash Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737320559",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "{luuvis} Daisy Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737374849",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Individually Colour Nails",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735195445",
      status:   "Untested",
      category: "Paramaker · Nails",
      notes:    ""
    },
    {
      name:     "SPN Anti-Possession Tattoo",
      creator:  "Castiel for DBD",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734163633",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Trophy Pack",
      creator:  "Pietson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736575280",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "floorplan",
      creator:  "milgetube",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736931735",
      status:   "Untested",
      category: "Build/Buy · Floor Texture",
      notes:    ""
    },
    {
      name:     "eyes anime",
      creator:  "apleepi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739385228",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Needs",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733807601",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Play Stardew Valley",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734033194",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Fix Missing Skill Learning Options",
      creator:  "Vroldo Power",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735325252",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "WINGSDG HAIR 260530",
      creator:  "WINGSDG",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735224127",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "FF14 ARR Character Selection",
      creator:  "catskins",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733694218",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Download the new version Balance Performance Optimizer v2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733598463",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "Decki Shelf",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733811418",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Baby Room",
      creator:  "NaNa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738893269",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Dress 1",
      creator:  "Jesse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740449810",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Basemental Beer",
      creator:  "base",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737845830",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "BirthMark",
      creator:  "jenna_clermont",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734482408",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Longer Lives",
      creator:  "FauxReal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733599349",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "[NovaVerie] [WIP] What The Ghost? Merch",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739799253",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Jobs Pack - Dental Field",
      creator:  "Spynoli",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737744641",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Let There Be Fun",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733797639",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Carti Table",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732908075",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Scotland Flag",
      creator:  "CFDyce",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733084363",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[Zomb] Gardening",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738729042",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "paraStudio One - Functional Desktop",
      creator:  "Simulacra",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740433755",
      status:   "Untested",
      category: "Build/Buy · Desk",
      notes:    ""
    },
    {
      name:     "Dragon&#x27;s Eye Highlights",
      creator:  "krystal_dragoness13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737165962",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Crumbs",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739447335",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cat Tattoos",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734710653",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Download the new version Regular Performance Optimizer v2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733598525",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "Catalan translation - Traducció al català",
      creator:  "manguito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734626716",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "School Pro",
      creator:  "blams",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736562925",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "evermore - Taylor Swift Radio Station",
      creator:  "evermoron",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735387731",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Braving the Flames",
      creator:  "GloriousSunbeam",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735267311",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Game - Dress to Impress",
      creator:  "Mr. Bored",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737656861",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Kontroller",
      creator:  "Oreao~",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734345580",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Perfect Party Shag Carpeting",
      creator:  "surelu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732967268",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Building is Free",
      creator:  "Cloverleaf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733108230",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Watch Scooby-Doo",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735237253",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Classic Briefs",
      creator:  "SpaceTaco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737606142",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Hand Tattoos Unlocked!",
      creator:  "fituflautaasas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734494549",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Ahoge Hair Category + Options",
      creator:  "just a fellow girl gamer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737036582",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Cosmetic Jobs!",
      creator:  "Eclipse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734462519",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Birdhouse",
      creator:  "ninanien",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738001691",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Russian Language",
      creator:  "бомбоунитаз",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733392799",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Sukunas Face Tattoos",
      creator:  "Funntime",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734779252",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Ceiling Lights Overhaul",
      creator:  "mxmkzn",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739037633",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Donation Menu is the battle pass",
      creator:  "Frank The Farmer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734748686",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Para+ Eyes",
      creator:  "lindsayx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734323707",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Cinamonroll UI",
      creator:  "jelliefish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738502663",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ayri&#x27;s Tattoos - NieR",
      creator:  "ayri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737694919",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Chest Tattoo",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735345704",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Makeup For All! - Beauty Clutter",
      creator:  "newfie.nif",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736716803",
      status:   "Untested",
      category: "Build/Buy · Beauty Clutter",
      notes:    ""
    },
    {
      name:     "Default Measurement - Teemos",
      creator:  "Fjordson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733069284",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Better Videogame Options",
      creator:  "Fjordson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733099006",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Asian Paintings 7",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739395486",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "TV Channel Series: YouTube Video Essays",
      creator:  "☣Chaotic_Rem☣",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734029135",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Always visible - Curtains",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738104354",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "KRStudioTattooLinePack",
      creator:  "KubikRubik",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736256336",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Hair CC",
      creator:  "silentlycries98",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736489252",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "More Facial/Body Hair Layering",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733921734",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "ayri&#x27;s Tattoos - Naruto",
      creator:  "ayri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735127576",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Hair_Long1_JaruS",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734492505",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Apex Legends Game",
      creator:  "MichaelAOS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736749266",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Les Mouches (Moles set)",
      creator:  "𝕶eetard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737707348",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Honkai Star Rail Game in Game",
      creator:  "Reeee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740384969",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "WinxMusaHairLong[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736132853",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Erik Deformity 1.0",
      creator:  "𝕶eetard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735036206",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Smokey Eyes Tattoo",
      creator:  "sam9719",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740456885",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "ruthyless",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739102977",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Rustic Ring Wall Shelf",
      creator:  "Mind Overload",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736965984",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "cube方块",
      creator:  "昨日秋",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739419808",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Vibrant Botanical Pattern",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733315238",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Marvin Camara Custom Storyteller",
      creator:  "arch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735532661",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "maroc",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735863076",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Disable Outdoor Embarrasment",
      creator:  "༺♞༻ | IcyPassionis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733213993",
      status:   "Untested",
      category: "Build/Buy · Door",
      notes:    ""
    },
    {
      name:     "Bunny&#x27;s Customizable Rug",
      creator:  "luna",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736720385",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Always visible - Electrics",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738069114",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Candle Decor",
      creator:  "Trizz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739685193",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Sink \"Palermo\"",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738329389",
      status:   "Untested",
      category: "Build/Buy · Sink",
      notes:    ""
    },
    {
      name:     "Northernlion Stream (TV Channel)",
      creator:  "Kiio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734723215",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Enable Fishnets For Teens &amp; Pre-Teens",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734303558",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "I Can Imagine Anything - Storyteller Portrait",
      creator:  "HERALD OF DARKNESS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734809599",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "TowelRack",
      creator:  "Zabinski",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733836939",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Young Adult and Adult agespan adjustments",
      creator:  "cootjerien",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738612584",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      nsfw:     true,
      notes:    ""
    },
    {
      name:     "Hello Kitty Island Adventure",
      creator:  "Larzrr",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736091250",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Growing City",
      creator:  "Tanegan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736629415",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Cube Bunny",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734355647",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Pansexual Pride Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734047152",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "FlirtExpert",
      creator:  "Astral1ty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738024572",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Leaf Chair",
      creator:  "Berry <3 Archer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733529507",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[ritoromun] ParaBoy Advance",
      creator:  "ritoromun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738073882",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Betula Cardigan",
      creator:  "birdercrow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737762885",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Wistful Vibe *WIP*",
      creator:  "Cobaltic",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734170687",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Pick-Up Line!",
      creator:  "Tanegan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736617228",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Better Skill Buddies",
      creator:  "Melina",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738472549",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Witch Orb",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740393832",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "No Needs",
      creator:  "RuCrip",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732978656",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "\"La Fresa\" Hair Comb",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737951745",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Lawn Flamingos",
      creator:  "tender sugar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733673685",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Warm Tones Needs UI",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733096219",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Asian Paintings 6",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739387222",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Game Series: Persona 3 Reload",
      creator:  "☣Chaotic_Rem☣",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734250403",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "More Subtle Outline",
      creator:  "kaiya *ੈ✩‧₊˚",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733033734",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Basic Long Hair",
      creator:  "y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738726909",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "UZI",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737617360",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "BRITE Detergent Bottle",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735986878",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "ParaAvenskol-StoryTellers",
      creator:  "DefenderPA90",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733074119",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Try and intimidate baby",
      creator:  "HellPony",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736942782",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "BBL Biker Dude",
      creator:  "celote33",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740458814",
      status:   "Untested",
      category: "Build/Buy · Vehicle",
      notes:    ""
    },
    {
      name:     "Success Rates",
      creator:  "Kapipara",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733836682",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[LEONID] No Adults Required",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739113332",
      status:   "Untested",
      category: "Visual · UI",
      nsfw:     true,
      notes:    ""
    },
    {
      name:     "Play Team Fortress 2",
      creator:  "m0resalt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736074922",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair \"Straightshortsides\"",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737032126",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Breeze Block Fence 1A",
      creator:  "shushanagallow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737818431",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Public Service Careers",
      creator:  "Topazolite",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734228881",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Hello Kitty Pink UI Icons and Recolors",
      creator:  "DaemonOfEdenTTV",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739457057",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "10 Tattoo Bundle",
      creator:  "littlecozycoco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739078816",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Brick Bundle",
      creator:  "Berry <3 Archer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734636504",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Plant Stand",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739710639",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Konyhai Fali Kanalak",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740247077",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Smaller Terrain Brush",
      creator:  "josh_the_tech",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740182901",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Red Panda Statue",
      creator:  "Sir Red Alfredo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734081211",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Keys Clutter Objects",
      creator:  "Sir Red Alfredo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735545369",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Day Sleep When Night Shift",
      creator:  "Rabbit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736595256",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Cozy Curves Sliders",
      creator:  "troppe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734671261",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Mint Skin Default replacer",
      creator:  "Mintexce",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733854452",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Leblebi Kafaoglu",
      creator:  "Carbor",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737638791",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Archways And Windows",
      creator:  "eurthfish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735001763",
      status:   "Untested",
      category: "Build/Buy · Window",
      notes:    ""
    },
    {
      name:     "Better Dynamic Deforms",
      creator:  "MichaelAOS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735968569",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Found Family",
      creator:  "trashpandacore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734464336",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Let There Be Fruit",
      creator:  "ForeverQuill",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739127003",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "aesthetic tattoo pack 02",
      creator:  "hexgrl",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739345734",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Terrain is Free",
      creator:  "Cloverleaf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733108326",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Kuromi and My Melody Teddy Bear Crop Top",
      creator:  "kitthecat13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734517135",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Sigilism Chest Tattoo",
      creator:  "TransparentCee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734685709",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Jamie&#x27;s Realistic Lifespan",
      creator:  "Creative Jamie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733926627",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "No Character Circle",
      creator:  "Bandito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733606332",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Woman sculptor",
      creator:  "vaisha_yawn",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738067934",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Touhou Hitbox Selector",
      creator:  "zebrafan12",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734784071",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Ruby | Doggone Date",
      creator:  "Lauwuffy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738295692",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "May Hair Conversion",
      creator:  "zedimuxo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734725685",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Red Needs UI",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733995073",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ah00b Zara Hair Conversion",
      creator:  "bye sexual",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738699539",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Watch Cooking Channel",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737485081",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Cuscuzeira Inox",
      creator:  "Jorge",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734592318",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Newspaper Jobs",
      creator:  "T_en_M",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734860610",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "OSRS Game",
      creator:  "x0r6ztGiggle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734153731",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Asa Milkmaid Top",
      creator:  "sawayama",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736480418",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "heels",
      creator:  "XXXTIGGER",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735047474",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Hanging Chair",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736925873",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Eclipse Story Card Pack - Negative Story Cards",
      creator:  "HermanTheDragon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735286089",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Grow Light",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737638283",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Big Cat Ears",
      creator:  "Erin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734077385",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Extra Names! New update! ☆",
      creator:  "Fr0gz-R4ve",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735247520",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Fred the Loaf",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733153642",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Merged Baggy Shirt Mod",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733904964",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Miscellaneous Jobs",
      creator:  "RockPaperRemote",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736669366",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "6 Swatches Vintage Floor Tiles",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737434072",
      status:   "Untested",
      category: "Build/Buy · Floor Texture",
      notes:    ""
    },
    {
      name:     "Storyteller Portrait Pack",
      creator:  "arch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736207148",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Cute Plushies",
      creator:  "horror movie noises",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737101509",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Unlock Scrubs For All",
      creator:  "Spynoli",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738020181",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Well-Behaved Chair",
      creator:  "Chih",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733439559",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Dumpster",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736735258",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "belqui",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735862631",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ayri&#x27;s Tattoos - Manga Vol. 1",
      creator:  "ayri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735079100",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Griffith Hair",
      creator:  "sad0chism",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737515561",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "CRUX - Aventurine details",
      creator:  "CRUX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735976120",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Brazil&#x27;s Filter",
      creator:  "hey_briel",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733907693",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Black Pink Needs UI",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734395505",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Customizable table mat and decals",
      creator:  "eurthfish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733927263",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "ParaStream Library: World of Warcraft",
      creator:  "Saskia2993",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734876971",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Dramatic Makeup Set",
      creator:  "𝕶eetard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736584207",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Bye-bye Food Spoilage!",
      creator:  "javaSketch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734666121",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "More ParaLife",
      creator:  "highimblair",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735990566",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Child Cost Plus V1.1",
      creator:  "MssMing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733828830",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "The Big Life Stage",
      creator:  "Coelha de Jade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735266279",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Hye-sook Hair [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738670287",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No Learn Recipe Cooldown",
      creator:  "thatsssojordy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733424835",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "HAIR CC - Ada Wong",
      creator:  "Mrs.Heart<3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736069518",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Glossy",
      creator:  "Amarysso",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740046580",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "NELE Nursery Set",
      creator:  "HAUSOFNANDO",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736146408",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Simscolony Thai Locolization",
      creator:  "Simscolony",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734514581",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Wheelchair as chair",
      creator:  "schreibtischlampe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733747788",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Simple Shape Floors and Walls",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737671470",
      status:   "Untested",
      category: "Build/Buy · Floor Texture",
      notes:    ""
    },
    {
      name:     "Together Cards",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733810124",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Lifespans in Real Years",
      creator:  "Simbot34",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733512931",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Triloba Top",
      creator:  "birdercrow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735373793",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Occupations Expanded: Cops &amp; Robbers [WIP]",
      creator:  "MrKewlFish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739468521",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "{luuvis} Freya Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737524396",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Asian Style Windows",
      creator:  "Admiral.Slowpoke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734084946",
      status:   "Untested",
      category: "Build/Buy · Window",
      notes:    ""
    },
    {
      name:     "Rags To Riches - Helper",
      creator:  "Zcythe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733463110",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Greenhouse Shed Roof",
      creator:  "chronically.rettungszwerg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739011948",
      status:   "Untested",
      category: "Build/Buy · Roof",
      notes:    ""
    },
    {
      name:     "Moth Tattoo #1",
      creator:  "Slecna_Existencia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732917766",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Snack Outside the Box",
      creator:  "Rabbit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740140863",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Leg Warmer Heels",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734634449",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Slovak Translation",
      creator:  "RASKORUSS2025",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740267295",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "No embarassed when using the toilet for romantic labels",
      creator:  "melanine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738539310",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "[księżycka] Chocolate Cup",
      creator:  "moonshard księżycka",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739258835",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cool Rectangular Glasses",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734301694",
      status:   "Untested",
      category: "Paramaker · Glasses",
      notes:    ""
    },
    {
      name:     "Mousepad",
      creator:  "Larzrr",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736831327",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Ur 1st PC",
      creator:  "Mattically",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734940621",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Horror Channel [Sinners 2025]",
      creator:  "DILF Milker",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735443436",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Dinossauro de Palhoça",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740094435",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "More Stat Points + Higher Stat Max + No Requirement to Use All",
      creator:  "Kaagareth",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739234557",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Dusty Purple Needs UI",
      creator:  "trashpandacore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735209311",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Alternian Astronomy [Day/Night Reversed Ver.]",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734027660",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Recolorable Fred",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733639928",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "New Day Notification Disabled",
      creator:  "TJ",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737592796",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "PUT MY CHARACTER ON YOUR PARAS AS A TATTOO",
      creator:  "wannabeGarystu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734360454",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Pen Ultimate Writing Mod",
      creator:  "RAYTRAC3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735782760",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Always visible - TV",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737985125",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "More control over stats",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734465966",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Child- and Youthcare Worker Career [WiP]",
      creator:  "Jarlious",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734296148",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Albert Wesker [Hair and Accessories]",
      creator:  "Dingus",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740208417",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Play Stardew Valley",
      creator:  "yolk",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733455549",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Tied Uneven Top",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217786",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Always visible - Range hoods",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738104548",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Ultra Performance Optimizer v2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739109946",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "GShade MXAO Fix [Read Description]",
      creator:  "Faeriemoo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734460382",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Cook by Appliance (Stove, Microwave, Grill)",
      creator:  "Duncanois",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734461640",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Extremely Long Lifespans - Accurate Years to Ages",
      creator:  "TrasherQuackBox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737135365",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Elegant Textures (WIP)",
      creator:  "thebaconmoose",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734213803",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Shorter Together Card Time",
      creator:  "Yonathor",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733374763",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "!!!Broken!!!   [SHEEP] Book",
      creator:  "sheep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3731930148",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Flowery Candle",
      creator:  "Kai",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735705573",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Swimwears &amp; Sunbathing",
      creator:  "JustNeil",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733459133",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "WinxMusaHairShort[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736132932",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair \"PonytailLongbangs\"",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737917861",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Shirt",
      creator:  "kittenela",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734742548",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Breeze Block Fence 03",
      creator:  "dantzara",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735370503",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Bow_Heels1_JaruS",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737303181",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Customizable Name Plate",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739863744",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Flag of Oʻzbekiston",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735822462",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Cottage roof texturepack",
      creator:  "sosmskulls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734775920",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Paras Just Wanna Have Fun",
      creator:  "OpalMagnus",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734165653",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "CustomBodyPillows",
      creator:  "JacobG5",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733098760",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "WinxFloraHair[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736132767",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Play the Witcher 3",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734348158",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Oops! All animal ears!",
      creator:  "asteriddle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736496186",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | White Moon Selector",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735313544",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "Bella",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740038709",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Українська переклад",
      creator:  "накурена вишня",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734936328",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Writing Skill (+14 Occupations) [PAUSED]",
      creator:  "kalajson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734004518",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "BRITE Bleach Bottle",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736066519",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Preteens+ (FIXED)",
      creator:  "Love_Iden",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738760883",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE doors",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736106819",
      status:   "Untested",
      category: "Build/Buy · Door",
      notes:    ""
    },
    {
      name:     "Cat Ears + Tail (necklace slot)  [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734129771",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Japandi Closet",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735843989",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Asian Paintings 3",
      creator:  "mickdampho",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739385565",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Plants Unorganized Catalog",
      creator:  "GoodOldPebbles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736597922",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Ikea Kallax Shelves",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735761473",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Artworx (0.5)",
      creator:  "Profileiche",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739070520",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Pipe Pack",
      creator:  "ZONEcold",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735348207",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Chronic Pain Paras",
      creator:  "fantomerizing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737558397",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Paralives Voice Studio",
      creator:  "Horrid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735715487",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Dog Decoration",
      creator:  "Shirotabi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734986433",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Lace Jumpsuit One Shoulder",
      creator:  "DivinityArt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733491550",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "More Eye Highlights",
      creator:  "Via",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733746877",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Red Light Green Light TV Channel",
      creator:  "anurabis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737513581",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Fires Don&#x27;t Spread",
      creator:  "Cloverleaf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733108269",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Always visible - Picture frames",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738058530",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Meryl&#x27;s lipstick",
      creator:  "红焖凶柿",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734929678",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Dog Tattoo Pack",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737786362",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Totoro Lamp",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735953474",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "DRAPAU e",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735862944",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Kid&#x27;s Channel",
      creator:  "Red Lenai",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735932928",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Strawberry Plushie",
      creator:  "YuiBunBun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738429263",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Adam - Storyteller",
      creator:  "ThisGuy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738440771",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Frog Glasses",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735445980",
      status:   "Untested",
      category: "Paramaker · Glasses",
      notes:    ""
    },
    {
      name:     "Mayor Occupation",
      creator:  "autumn_leaf1",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734390047",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "TS4 GTW Tattoos",
      creator:  "JenX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737410707",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Keyblade | Tattoo",
      creator:  "BIOSmemory",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734435482",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "GTA Tattoos - Blue",
      creator:  "wheresmimi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735895512",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "More Cards Options",
      creator:  "null",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732903434",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Диван",
      creator:  "Lsankun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737103152",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "Cassette FM",
      creator:  "Ticksy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736522795",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Smiley Tattoo",
      creator:  "rea_keebz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735040507",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "English Translation: &#x27;Clutter&#x27;",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737745775",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Русификатор",
      creator:  "Dostoevsky",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735587757",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Big Families",
      creator:  "RuCrip",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732871306",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "1 Foot (US) Grid",
      creator:  "mothmellofluff ttv",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734130445",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Dog Items",
      creator:  "~p~ChloeTheWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735815798",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Berry Bowl",
      creator:  "RAYTRAC3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738229205",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Baby Smooth | Baby/Toddler Skin Override",
      creator:  "CertifiedSilly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733060011",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Yellow Moon Selector",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735316663",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Breeze Block Fence 04",
      creator:  "Molotov Zav",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735372849",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Laundry Day Clutter &amp; Furniture",
      creator:  "newfie.nif",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739407064",
      status:   "Untested",
      category: "Build/Buy · Furniture",
      notes:    ""
    },
    {
      name:     "DJ Controller",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735600786",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Eye Default replacement",
      creator:  "Alliemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735873344",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "25% Slower Need Decay",
      creator:  "PeachFrosty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736679481",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "IKEA HOLMERUD side table",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734930430",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Bat Tattoo",
      creator:  "Ladiva",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740457757",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Astarion Scars",
      creator:  "Zombrigit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737143179",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Bow Garter | Tattoo",
      creator:  "BIOSmemory",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734718818",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Filtro de Barro Brasileiro",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734689007",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "The Hearthwood Desk",
      creator:  "Mind Overload",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738004090",
      status:   "Untested",
      category: "Build/Buy · Desk",
      notes:    ""
    },
    {
      name:     "Clawing&#x27;s Expanded Social Options",
      creator:  "Clawing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737671731",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Letters &amp; Numbers",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738202011",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Clair Obscur: Expedition 33 Tattoos",
      creator:  "Yoki",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737913116",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Ikea PS Side table",
      creator:  "Jolisa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735066513",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "Bella",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739803022",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Parapipe",
      creator:  "TransparentCee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735743399",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Toothpaste Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737653293",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Buy Debug Items",
      creator:  "alexuuid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734071468",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Critters &#x27;n Cages [WIP]",
      creator:  "Shoobly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737671004",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Pringles Set",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739056373",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Office Space Carpeting",
      creator:  "surelu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732947090",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Emo Eyeshadow",
      creator:  "Xx_N1ghtm4r3_P01s0n_xX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733973532",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "ParaStream Library: The Elder Scrolls Online",
      creator:  "Saskia2993",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736796077",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Dead by Daylight GAME V2",
      creator:  "Jarlious",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734499872",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "BBB Transformers Stuff",
      creator:  "paige.pinkcrayon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738213617",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "{luuvis}MediumBangsHair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737131595",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[Zaccaria] Heart Kitchen Clutter Set",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739693342",
      status:   "Untested",
      category: "Build/Buy · Kitchen Clutter",
      notes:    ""
    },
    {
      name:     "Fantastical Eyes",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735542994",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Lady Liberty with skull face tattoo",
      creator:  "naturalane",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740030476",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Strawberry Kitchenware Set by Cosmolojay",
      creator:  "jordan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734284200",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Symbolica Decor",
      creator:  "T_en_M",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735560076",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Stand Still In Creator",
      creator:  "TheDovahNova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733581248",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Xbox Series X",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739370995",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "More Beauty Marks!",
      creator:  "YANNA",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737674249",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Marvel Rivals Game",
      creator:  "SydtheKid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734000086",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "[FIAA] Afro Puffs Hair",
      creator:  "Mvfiaa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734757971",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Bentley Arnage",
      creator:  "Sir Red Alfredo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736590945",
      status:   "Untested",
      category: "Build/Buy · Vehicle",
      notes:    ""
    },
    {
      name:     "Bloom Decor Set",
      creator:  "KimchiRamen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737007365",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Stop All needs",
      creator:  "Coelha de Jade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735267029",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "STAR ParaLottery",
      creator:  "starcrescendo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739423344",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Igari Top",
      creator:  "Chrome",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738309890",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Pop Radio Station",
      creator:  "Stubbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736557356",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Basemental Beer Traducción al español",
      creator:  "ADimGaR",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739880582",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "RAYTRAC3R Ports Pack",
      creator:  "RAYTRAC3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739243679",
      status:   "Untested",
      category: "Paramaker · Body",
      notes:    ""
    },
    {
      name:     "Aviation Careers",
      creator:  "Danp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736095613",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Los Santos Rock Radio",
      creator:  "bagrieltinti",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736302374",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Filmic Looks (Neutral version)",
      creator:  "G R £ Y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734765347",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Life Is Strange Game",
      creator:  "Moldy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734312645",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "ariana grande tattoo pack",
      creator:  "shadowslender",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736395366",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "\"BRITE\" Quiker WetJet",
      creator:  "Iron Mal",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737785915",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Crystal Clear Map View",
      creator:  "Arro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732855494",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "PS5 Controller",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739237345",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE single add on",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736169197",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Korean Translation",
      creator:  "AAA",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734069972",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Lifespans Proportional to Pregnancy Duration [Longer YA]",
      creator:  "buren",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733607425",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Swim Teacher Job",
      creator:  "Cloverleaf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733117745",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "[SHEEP] Vladislaus straud Statue",
      creator:  "sheep",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734328237",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "IKEA Lagkapten / Alex Desk",
      creator:  "Claire",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737069983",
      status:   "Untested",
      category: "Build/Buy · Desk",
      notes:    ""
    },
    {
      name:     "Alternative Radio Station",
      creator:  "Stubbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737002451",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Zane Jackson Custom Storyteller",
      creator:  "arch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735334834",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Pagan Clutter",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734650669",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Utilities",
      creator:  "trashpandacore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733969339",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Matte-ish Lipstick",
      creator:  "Kandy Kat",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734712038",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Hockey League career",
      creator:  "smperez2011",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734304867",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Learnable Surgery Skill",
      creator:  "Nova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733824458",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Goth Bunny | Tattoo",
      creator:  "BIOSmemory",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734392219",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Jesters Don&#x27;t Ignore Needs",
      creator:  "BellaDovah",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739201626",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Maple FM",
      creator:  "Ticksy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735149751",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Solid color eye",
      creator:  "livingvoid115",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735544448",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "AO3 Romance Reading",
      creator:  "Pardalis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733636493",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "IKEA BILLY shelf",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736040279",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "00s MTV - TV Channel",
      creator:  "GalleryPiece",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735723323",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Face Piercing for Teen and Preteen",
      creator:  "YIPPEe x3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734258341",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "BASE AVATAR",
      creator:  "Molotov Zav",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735169061",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Simple Skin",
      creator:  "garfanders",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737043829",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Playable Club Penguin Game",
      creator:  "DonutQueen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735454473",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Invisible Para Selector",
      creator:  "Breaking Gaia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738263617",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Fleur De Lis Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739330199",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Thai Translation",
      creator:  "Maichrasar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733055007",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Demon_Eyes",
      creator:  "twojastara",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735854952",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "人称翻译修改与模组简体中文汉化",
      creator:  "Hornwort",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738461503",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Greenhouse Shed Roof",
      creator:  "Demi-Demon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738390138",
      status:   "Untested",
      category: "Build/Buy · Roof",
      notes:    ""
    },
    {
      name:     "Road to Vostok GAME",
      creator:  "Jarlious",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734088354",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Children and Pre-Teens can help with toddlers",
      creator:  "Rye_Ch3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737772676",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Zoom out more!",
      creator:  "Arro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732874872",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Relationship Preferences for Romance and Intimacy",
      creator:  "fantomerizing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736671150",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Flowers tattoo",
      creator:  "PlanetCaravan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736456543",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Used Pizza Box Decor",
      creator:  "starswithoutspace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739957272",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "LotisHome_01",
      creator:  "Lausyby",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740259900",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Pregnancy Modification: Need decay, weight gain, and nursing",
      creator:  "snowythelonewolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735770486",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Mailbox Pack CC",
      creator:  "Maru",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734104556",
      status:   "Untested",
      category: "Build/Buy · Mailbox",
      notes:    ""
    },
    {
      name:     "Playable New Day (Mobile Edition)",
      creator:  "NightmareFurbies",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734246745",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Non-Stop-Pop FM",
      creator:  "bagrieltinti",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736364556",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Tiny Roses Pattern",
      creator:  "NyGirl976",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737744776",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Breeze Block Fence 01",
      creator:  "Molotov Zav",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735351580",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Pâte à Choux Dress + Bow [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739053119",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "ParaStream Library: Final Fantasy XIV",
      creator:  "Saskia2993",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734983790",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "KR Russian Translation",
      creator:  "KubikRubik",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735860071",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Misophonia - Typing",
      creator:  "ФИФИ",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739496966",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Swedish Shark Plushie",
      creator:  "Butterbee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735950800",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Watch Youtube",
      creator:  "Kchem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733718872",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "SoapBar Retexture",
      creator:  "Cheri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737781855",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Stop Camera Auto Height",
      creator:  "Odrez",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736966297",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Fire Censorship Effect",
      creator:  "luca8fg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732873962",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Gundam-Colored Model (Giki Recolor)",
      creator:  "SuperSonicEx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737965891",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "LA Gangsta Back Tat",
      creator:  "kate13141",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737173307",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "TADC Theme over Main Menu",
      creator:  "asteriddle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734709069",
      status:   "Untested",
      category: "Visual · Audio",
      notes:    ""
    },
    {
      name:     "Lil&#x27; Garden Doodle Character Selector",
      creator:  "Rue_Bean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737961220",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Play Stardew Valley",
      creator:  "Graciea",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733475296",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Missing Poster",
      creator:  "erin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737964770",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "GTA Tattoos - Margot",
      creator:  "wheresmimi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737218789",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Curves XL: Extra Breast &amp; Body Sliders",
      creator:  "Ethan Del Velo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734620906",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Gothic Yellow Rose Selector",
      creator:  "ThomasKovo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740062963",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Sharper Shoulders",
      creator:  "R o u b en",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736357408",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Bilie Eilish Hit Me Hard And Soft Movie",
      creator:  "mooglemania",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733758617",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "NeonJay&#x27;s MasterCore (God-Mode Cheats &amp; Bug Fixes)",
      creator:  "Neon Jay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739337368",
      status:   "Untested",
      category: "Live Mode · Cheats",
      notes:    ""
    },
    {
      name:     "Roundabout Bookcase",
      creator:  "CleanYoMan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737495870",
      status:   "Untested",
      category: "Build/Buy · Bookcase",
      notes:    ""
    },
    {
      name:     "Alder Eyes DR",
      creator:  "alderwitch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733688627",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Mint Skin Overlay",
      creator:  "Mintexce",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733492124",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Flower tattoo",
      creator:  "Cozywitht",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734244643",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Disable &#x27;Town View&#x27; Postprocessing",
      creator:  "Blackout K.",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732922755",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Cherry Blossom Pattern",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733339046",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Videogames Tattoo Vol. 1",
      creator:  "Masku⁶₆⁷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734668110",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "British English (translation)",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732773622",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Stronger Shadows and Deeper Colors",
      creator:  "guimero64",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734344709",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Honk Apocalypse",
      creator:  "Duncanois",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738079472",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Graffiti Cat Shirt - Recolorable Shirt Decal",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734184839",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "spenza_mie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740321187",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Septum Pack [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739312986",
      status:   "Untested",
      category: "Paramaker · Piercing",
      notes:    ""
    },
    {
      name:     "Rose Cross Ink by CocoGames",
      creator:  "cocoellean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733563712",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Game - Sticky Business",
      creator:  "PhantomicPhoenix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735610297",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Faster Skilling- All Skills go faster!",
      creator:  "Spicy Chicken",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735359128",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Discord for Paralives!",
      creator:  "l3nnard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735173742",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Glossy Lipstick Set 01",
      creator:  "Raellen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734438673",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Express Learning",
      creator:  "Coelha de Jade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735267798",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Occupations Expanded: Mental Health (WIP)",
      creator:  "MrKewlFish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733076445",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Ribbon - Honey glow default skin",
      creator:  "Ribbon_nya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737773132",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "SB tatoo",
      creator:  "ExportedCoco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733019622",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "More Daily Homework",
      creator:  "boodle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736493000",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Balance Performance Optimizer v2.0",
      creator:  "Lola",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739109713",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "Architect Career",
      creator:  "ncliff",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735641371",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Prayer Journal",
      creator:  "Sim_Play_Loraine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736659399",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "BetterLifespans by wrecknrule - Tradução PTBR by SayuriiW",
      creator:  "SayuriiW",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734880919",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Nose bridge freckles",
      creator:  "lindsayx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735014627",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Subtle Time Control Sounds",
      creator:  "Mattically",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734478519",
      status:   "Untested",
      category: "Visual · Audio",
      notes:    ""
    },
    {
      name:     "★Dahlia★ | Bold Blue Selector Circle",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735240829",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Simple Shelves",
      creator:  "TheRedMix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738791723",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Placeable Ziplines",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733642730",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Plants Organized Catalog",
      creator:  "GoodOldPebbles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738228386",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Yoga is Exercise",
      creator:  "fiofiofio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737683647",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Flag of Albania",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735822671",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "The Sims Radio Station",
      creator:  "GabrielShoeBR",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739946682",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "遊戲中編輯小人",
      creator:  "oktobuss100",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734186932",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[Meira]Messy Make-up",
      creator:  "Meira",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733995462",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "More Camera Control - Live Mode not Paramaker",
      creator:  "Aubean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738052987",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Pastel Map Icons",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738920777",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "коженый диван",
      creator:  "Lsankun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737144311",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "[Frxggles] - Long Braids",
      creator:  "l&#x27;unebyul (Frxggles)",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738859139",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Dinnerware",
      creator:  "genissabadell123",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736644581",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "You Can Buy Every Lot Type",
      creator:  "Sass You",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739868962",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Rose Earring",
      creator:  "ice555",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737446868",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "No Green Clouds At Low Hygiene",
      creator:  "J_Whatever",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736122061",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "{luuvis} Ian&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740313297",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Occupations Expanded: Legal",
      creator:  "MrKewlFish",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733677231",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Flag of Kyrgyzstan",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735786640",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Retextured Biker Cut",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739108563",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Tilt-Up Garage Doors - Paj",
      creator:  "PajSan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739143985",
      status:   "Untested",
      category: "Build/Buy · Door",
      notes:    ""
    },
    {
      name:     "Cauldron",
      creator:  "SargeOfSarge",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738231541",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "TsukiMel&#x27;s Tattoo pack: 1",
      creator:  "Spoon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734495881",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Gameboy",
      creator:  "LazyKudla",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734876648",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Personality Level Up to 100",
      creator:  "Jesse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740443043",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[CC] [Hair] Rumi",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735277931",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Ink &amp; Evolution: Minimalist Poke Tattoos",
      creator:  "Axel",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737334358",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Customizable DVD Case (Custom Images)",
      creator:  "Honeyed_Lemons_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734558603",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Hello kitty heart selector",
      creator:  "Len",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737550348",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Half Collectable Values",
      creator:  "JumpyJuice",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737047403",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "hair giselle",
      creator:  "h4ruexe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739748270",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Owl&#x27;s Heart Bellbottoms",
      creator:  "TheOwlManBranch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734084543",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Mango Pillow",
      creator:  "TiKayamb974",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738949435",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "Faster game&#x27;s credits speed",
      creator:  "Thewibee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732888866",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Personality Options for Younger Paras",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734184929",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Wooden Playset",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739386219",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Stylized Lash Pack",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733469159",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Grape",
      creator:  "Tilogy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738701902",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[LEONID] No Autonomous Push-ups",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734144957",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Rippled Runner Rug",
      creator:  "TswizzleEG",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736495047",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Moonlace Buns Hair",
      creator:  "moonlace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739610892",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Writing Skill (WIP)",
      creator:  "Yogo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733079003",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Pompompurin Cursor !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736783830",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Grebbs Sausage Roll",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738964836",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Customize Para After Creation",
      creator:  "Cochonou Sponsored",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733008725",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Lineless Skin Overlay",
      creator:  "Celaziel",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733424575",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "[CC] [Hair] Middle Part Curly Ringlets",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737933626",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Cat",
      creator:  "Eddie Murphy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734528516",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "English Translation: &#x27;Decor&#x27;",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738062556",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "It&#x27;s okay to potty",
      creator:  "Fjordson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733056846",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "IKEA MALM set",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740256073",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Simple Pec Retexture",
      creator:  "boy king dick boss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733583836",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "[Deprecated] Bed Claiming [Requires BepInEx Plugin]",
      creator:  "Zeliktric",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735297761",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "[Zaccaria] Car Pack",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739885597",
      status:   "Untested",
      category: "Build/Buy · Vehicle",
      notes:    ""
    },
    {
      name:     "Post Modern Dining Room",
      creator:  "Demi-Demon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739992897",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "P4 Viking Braid",
      creator:  "babygee180",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733220116",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Dungeon Crawler Carl Collection",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736701872",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Always have a \"Be Mean\" Togehter Card",
      creator:  "Jean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733983973",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Muscle Slider Revamped",
      creator:  "Tarruvi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732928906",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Ultra Short Lifespan",
      creator:  "Pretoriano",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732824864",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Việt Hóa Paralives",
      creator:  "Nevermore",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735616490",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Bug Tattoo Pack",
      creator:  "Rae",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737415185",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Baby Bottle",
      creator:  "eu4hxria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735643009",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "HAIR CC - Straight Bangs",
      creator:  "Mrs.Heart<3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735740556",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Unreal Tournament video game",
      creator:  "LeXistenZiaLisM",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734610741",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "DinosaurToy",
      creator:  "Amy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735053925",
      status:   "Untested",
      category: "Build/Buy · Toy",
      notes:    ""
    },
    {
      name:     "Quadruple Simple Empty Terrain",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733545705",
      status:   "Untested",
      category: "Build/Buy · Terrain",
      notes:    ""
    },
    {
      name:     "Melino Bills 1.3",
      creator:  "Doruna",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735387813",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Boondocks Tattoo",
      creator:  "RoyalPain",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737176972",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Tree Shelf",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737221887",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Witchy Aesthetic Tattoos",
      creator:  "YetAnotherCookie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738291060",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "PARALIVES",
      creator:  "RosieTran",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739774255",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Faster Together Cards",
      creator:  "Tex666",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734393350",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Ink &amp; Feather",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739507181",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Strawberry Match Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735545278",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Angular Floor Window",
      creator:  "Lenny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737163867",
      status:   "Untested",
      category: "Build/Buy · Window",
      notes:    ""
    },
    {
      name:     "aesthetic tattoo pack 01",
      creator:  "hexgrl",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735544454",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "TeleportTest",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737874593",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Stars Selector mod",
      creator:  "eriophorum",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733355797",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair Braidbubble",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737371782",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE single small add on",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736169591",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Swimsuit Outfit Mod",
      creator:  "luca8fg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732897619",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Lowrise Capris",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217263",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Coral Island Game",
      creator:  "arggonu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736570039",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Cherry - Textures",
      creator:  "Hillie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736239657",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Invite to Current Lot",
      creator:  "null",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732831966",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Set of 2 Eyelashes",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740037910",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Plock 19 W/ Switch (With and Without Laser)",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734563223",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Thriller Dance",
      creator:  "SacrificialMods",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736373019",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Reading Romantic Fanfiction kills you instantly",
      creator:  "wannabeGarystu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736781794",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Side Part Straight Medium Hair",
      creator:  "GUnit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736645128",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Sleep In",
      creator:  "Odrez",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736970795",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Piano Songs from Minecraft",
      creator:  "Tango Mango",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738841059",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Seated Reading",
      creator:  "sam9719",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740420663",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Homestuck Aspect Tattoos",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734650007",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Purple Needs UI",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732827085",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Potter Career",
      creator:  "HalfSpace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740089772",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Key Rebinding",
      creator:  "katherinelricker",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733008938",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Searching Recipes raises Food Skill",
      creator:  "Lille",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737918536",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Disable among us",
      creator:  "Weir",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737175668",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Pastel Emotions and Status Effects | RESHADE [v1.1]",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734778731",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Eyes Highlights - Hearts",
      creator:  "CodeNekko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733333854",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Slower Treadmill",
      creator:  "br1br1anna",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733670084",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Stanley Humphrey Storyteller",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734503815",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Cheats",
      creator:  "raybreeder7",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734482598",
      status:   "Untested",
      category: "Live Mode · Cheats",
      notes:    ""
    },
    {
      name:     "Model Carrier PL",
      creator:  "nothing_matters",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734581876",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Rose Hair",
      creator:  "Cozy Parafolk CC",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734101568",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Push Pin Lamp",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736327261",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Leaky Ink Radio - Music in the in-game language Parli!",
      creator:  "Breaking Gaia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737707591",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Curved Tv",
      creator:  "Pedro",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739097810",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "More Speed Time Option!",
      creator:  "fituflautaasas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733932918",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Take A Bike: Functional Bicycles",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737072007",
      status:   "Untested",
      category: "Live Mode · Vehicle",
      notes:    ""
    },
    {
      name:     "Printed short-sleeved shirt - ZN 20260531",
      creator:  "zn_l_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736023769",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Rock Radio Station Expanded",
      creator:  "Stubbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738222153",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Maggie Vaughan Custom Storyteller",
      creator:  "arch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736187232",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Round Conical Table",
      creator:  "tinypapa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740382067",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "And They Were Roommates",
      creator:  "paladuck",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735391621",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "clh01",
      creator:  "麦当劳汉堡",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738578635",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Play Red Dead Redemption 2 (RDR2)",
      creator:  "manguito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734684849",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "No Request Markers",
      creator:  "J_Whatever",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736226053",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "New Slider : Better \"package\" for masculine bottom body",
      creator:  "Khyan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732988722",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Fodros Függöny",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740246777",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "Vitiligo [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734613622",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Infinite Wall Height and Thickness",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733534279",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Beach Trash Interruption Fix",
      creator:  "Palrium",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733909706",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "Animal Career Pack",
      creator:  "Anxious_Shark_Attack",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734782035",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Moonlight Bloom Tattoo",
      creator:  "PlanetCaravan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737126642",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Catherine The Game",
      creator:  "Crypt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734045046",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "M4",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737617675",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Eva Bow",
      creator:  "ice555",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737394837",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "FIVTEES Midcentury Office Set",
      creator:  "HAUSOFNANDO",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738755343",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Ask For Money",
      creator:  "Legoshi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733961912",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "No New Paper",
      creator:  "spookkyfoxx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737572276",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "HOWL Professional Series 36-Inch Range",
      creator:  "Paratect",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737799683",
      status:   "Untested",
      category: "Build/Buy · Stove",
      notes:    ""
    },
    {
      name:     "No Censor",
      creator:  "Rainbow_Gamer69",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739285240",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "VERY WIP - Textile Worker Occupation",
      creator:  "maisoncetacea",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734454541",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "[KitCat] - Cottage Core Pillow Textures",
      creator:  "Bambii",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734259457",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Homestuck Troll Horns",
      creator:  "YIPPEe x3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734037633",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Buckety McBucketFace",
      creator:  "indiaskapie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736382789",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Custom Signs",
      creator:  "raquelgp232",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734924329",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Sora KH TShirt",
      creator:  "kitthecat13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734529612",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "IKEA KALLAX shelf (4 surfaces)",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735070705",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Jiji Lamp",
      creator:  "purifuri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736034727",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "maroc2",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735863168",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Glossy Lipstick Set 02 - Seasons",
      creator:  "Raellen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734918400",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Skyrim Game",
      creator:  "TheDovahNova",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734410108",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "World of Warcraft",
      creator:  "Kasairona",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734705462",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "More Together Cards",
      creator:  "MeteorSwarm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736664896",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "L&#x27;atelier / Artist workshop",
      creator:  "Evy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735134951",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Cherry Blossom Pattern",
      creator:  "Possum1466",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734714378",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Melino Cleanup",
      creator:  "blue em",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736553431",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "Supernova Eye Highlights by myshunosun",
      creator:  "myshunosun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735729546",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "The Writer’s Path: Journalism &amp; Careers at The Paragraph",
      creator:  "fituflautaasas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733268183",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Hell Camera Filter",
      creator:  "panon819",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733043068",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "Heavy Duty Shelves",
      creator:  "EISFEUER",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739242980",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Hair_anime_girls",
      creator:  "Cinnamon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734530166",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Headphones",
      creator:  "maxtron95",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736812344",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Pink Flower Texture [JustCley]",
      creator:  "JustCley",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740402317",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Sliced Side Table",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737778986",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "[CC Set] Valorant Neon Hair and Accessories",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733367115",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Honey Comb Arm Tattoos",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733749253",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Censor",
      creator:  "jenna_clermont",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734482502",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Sage Drive",
      creator:  "NoobsieGames",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739385854",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Cassie&#x27;s Whimsical Lair",
      creator:  "Cassie Collins",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734170018",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Mais personalidade",
      creator:  "Rayv",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735717747",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Pinkie Turq UI Mod",
      creator:  "jimmiejttipton",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737189282",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Candles By Vivi",
      creator:  "Vivi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735219343",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "[CC] [Hair] Aphrodite (SMITE)",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736629160",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "NewModItem",
      creator:  "Bobsenas",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740465740",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Lip System - Modular Lip Styles",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737663480",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "[Meira]Top Surgery Scars",
      creator:  "Meira",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733789294",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Paintings",
      creator:  "jessicakmoody13",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735512908",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Unlocked Intimacy Options for Romantic Interests",
      creator:  "satomi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737949670",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Mandala Character Selector",
      creator:  "fleabag",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734650155",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "更合理的睡觉时长",
      creator:  "Marce",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739029746",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Display Townies on Map",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732799847",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Cutie Lashes",
      creator:  "Floral",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735816180",
      status:   "Untested",
      category: "Paramaker · Lashes",
      notes:    ""
    },
    {
      name:     "Galaxy Watch",
      creator:  "James Nuts",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738548260",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Turn Off Lights",
      creator:  "guimero64",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734286014",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Placeable Bus Stops and Signs",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733628658",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "kuromi_pillow and balloons",
      creator:  "thEmpress",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733894528",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Buy any Property (Bills OFF)",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736342957",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Tattoo Pack 1",
      creator:  "LL0N3R",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738271943",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Fall Out Boy Hits Station",
      creator:  "louis de pointe du lac lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736444357",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Hungry Jester",
      creator:  "Kchem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733673703",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Cheerful Lighting",
      creator:  "Zerbu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734260781",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Action Series: Listen to Reddit Stories",
      creator:  "☣Chaotic_Rem☣",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735717628",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Betina Hairstyle",
      creator:  "claudiazurk",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738975206",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Bric",
      creator:  "KingWasabi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738322842",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Guitar Hero Frets Tattoo",
      creator:  "mmartinsdemoura",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735014460",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "BastianHair",
      creator:  "jeseroba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736652209",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Gold Butterfly Necklace",
      creator:  "GlitterberryFly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736547397",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Takeaway Clutter Bundle",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739546067",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Neutral Default Skin - Nekko",
      creator:  "CodeNekko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733474905",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "togo",
      creator:  "Herrass",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738154654",
      status:   "Untested",
      category: "Build/Buy · Sofa",
      notes:    ""
    },
    {
      name:     "Jushiiie&#x27;s Tattoos",
      creator:  "Jushiiie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734761200",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Eyeliners (Part 1)",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735370842",
      status:   "Untested",
      category: "Paramaker · Eyeliner",
      notes:    ""
    },
    {
      name:     "Play Limbus Company",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733883431",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Real Eggs Photo",
      creator:  "TiKayamb974",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738947701",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Gangsta Arm Tat",
      creator:  "Ravenwood",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737174102",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "50% Slower Need Decay",
      creator:  "PeachFrosty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736527791",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Skyzee&#x27;s Coastal Collection",
      creator:  "Skyzee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740401222",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Gold Bars",
      creator:  "Ylox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736283930",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "HAIR CC - Medium Curtains",
      creator:  "Mrs.Heart<3",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735600806",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "plumlace:Birthday Cake UI Recolor",
      creator:  "plumlace",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734484770",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "Play inZOI",
      creator:  "Arkanum 10M",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734034751",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "MLM Pride Flag Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734047203",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Lifestyles for Kids",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734054643",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Always Succeed on Together Cards",
      creator:  "null",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732885562",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Ball Python [Mafloppi&#x27;s Vivarium Set]",
      creator:  "Mafloppi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736918772",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Static Romance Category 1.",
      creator:  "eirjf4",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733296260",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "More Subtle Outline",
      creator:  "celote33",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735713991",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Play League of Legends",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736127574",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Harder Personalities - Self-Discovery Takes Time",
      creator:  "TrasherQuackBox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737231123",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Child Prodigy (Easier School)",
      creator:  "HrBingR",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734053848",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Sideburns beard style",
      creator:  "Christian",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734293606",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "my tat",
      creator:  "lho1525",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735909480",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Hair 2",
      creator:  "Coelha de Jade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740461608",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[Zomb] Vanity Clutter",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736545281",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Gaming Emotions",
      creator:  "Kiio",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738264921",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Parapenis (v1.5)",
      creator:  "Marosa",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739510246",
      status:   "Untested",
      category: "Paramaker · Body",
      nsfw:     true,
      notes:    ""
    },
    {
      name:     "Extra Passionate Kiss",
      creator:  "GloriousSunbeam",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737201884",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Bronto Plush",
      creator:  "WyggleWyrm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736894445",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Papasan Chair",
      creator:  "kingfisher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733151048",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Wall Price",
      creator:  "貓毛供應商",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732884389",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Become Immortal (2k Years Old)",
      creator:  "Sass You",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740002021",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Joestar Manga Birthmark",
      creator:  "Torllay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733995967",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Computers Seperated",
      creator:  "rena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737649832",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Mango Texture",
      creator:  "TiKayamb974",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738937684",
      status:   "Untested",
      category: "Build/Buy · Texture",
      notes:    ""
    },
    {
      name:     "Lophi&#x27;s Skeleton tattoo II ratscrap",
      creator:  "welcome to funny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733000747",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "SkipSchool",
      creator:  "ciamaar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733509632",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Marge Simpson Hair",
      creator:  "wannabeGarystu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734248117",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "More Undershirt Options",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733874436",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Goth? Contour (Blush)",
      creator:  "NovaVerie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735391291",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Polka Shorts",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217547",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "StreangerFM Radio Station",
      creator:  "Fank",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736334324",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Natural Oak Plank Shelf",
      creator:  "EISFEUER",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738137007",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "ScrubPara",
      creator:  "Claire",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736104552",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "[LEONID] TV Cooking Tips",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738112231",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "ScandinavianShelf",
      creator:  "Steinfeger",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735941007",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "TTPS Tattoo",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734938179",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[Baralives] Better Arm Sliders - V1",
      creator:  "boy king dick boss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734019632",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Mirror \"Palermo\"",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738867470",
      status:   "Untested",
      category: "Build/Buy · Mirror",
      notes:    ""
    },
    {
      name:     "Cut Out SwimSuit // Swimwear",
      creator:  "zaczoix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735747757",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Realistic Height",
      creator:  "I_Is_Smartness",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734268275",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Gás de Cozinha 13kg",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735282671",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Pepe Pacifier - Nightingale",
      creator:  "Nightingale",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733605461",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Off The Shoulder Sweater",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217384",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "(Almost) No Need Decay",
      creator:  "kalajson",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735798032",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "360Hz framerate cap",
      creator:  "SaltadoSalad",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733271760",
      status:   "Untested",
      category: "Visual · Performance",
      notes:    ""
    },
    {
      name:     "[Shine] Clutter - Cauldron",
      creator:  "Shine",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740336746",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Sims 3 Camera",
      creator:  "RCDG9",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736466710",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "Gold Layered Necklace",
      creator:  "GlitterberryFly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734941461",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Disable Embarrassed Emotion Using Toilet in Room With Partner",
      creator:  "HermanTheDragon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737124160",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "IKEA LADMAKARE single shelf",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736168704",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Don&#x27;t Cook Right Before Work",
      creator:  "Rabbit",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736682950",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "𝙮𝙤𝙪𝙧 𝙩𝙪𝙧𝙣 𝙄𝙄",
      creator:  "jjukza",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734492046",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "\"The Dani\" - TS4 Hair Conversion",
      creator:  "andallthatjasper",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736296277",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Quack-tastic Organizer",
      creator:  "Chtulhu [Z]ombie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737080231",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Even Faster Together Cards",
      creator:  "br1br1anna",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733672295",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Sideburns as new beard category",
      creator:  "Ghoul",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737169129",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "Boba Table",
      creator:  "ParaPuff Girls",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732833284",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Haunted Hat Holder",
      creator:  "IT-Art",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733705356",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Mob Ties",
      creator:  "Imperator",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733009173",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "[CT] Baldi&#x27;s Basics Pack",
      creator:  "Jesse",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740435892",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Samurai_Beard",
      creator:  "把克里斯Daddy淦成夹心泡芙",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740216585",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "Better Bodybuilding",
      creator:  "ssuterusu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734767552",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Dreamlight Valley Game",
      creator:  "cosmic daydreams",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736024292",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Breeze Fence 01",
      creator:  "★Dahlia★",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735248592",
      status:   "Untested",
      category: "Build/Buy · Fence",
      notes:    ""
    },
    {
      name:     "Dalahast",
      creator:  "Ztevan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734202413",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Larger Households",
      creator:  "RanS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732806748",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "More Togther Card For Elders",
      creator:  "Legoshi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734028364",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "окно",
      creator:  "bracho.av",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739872485",
      status:   "Untested",
      category: "Build/Buy · Window",
      notes:    ""
    },
    {
      name:     "[Zomb] Everyday Clutter",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736306906",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Laptop da Xuxa",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738808371",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Play The Isle",
      creator:  "✦starscape✦",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735643659",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Functional Changing Tables",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737272571",
      status:   "Untested",
      category: "Build/Buy · Changing Table",
      notes:    ""
    },
    {
      name:     "Gun Safe",
      creator:  "Zaccaria",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737612759",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "ParaMusic Pad",
      creator:  "Simsiboy",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735592867",
      status:   "Untested",
      category: "Build/Buy · Electronics",
      notes:    ""
    },
    {
      name:     "Tattoo Pack",
      creator:  "Rae",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736350868",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Base Game Lot Restyle (Autumn Shaders)",
      creator:  "CORuh_",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734141570",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "SBAHJ Tattoo",
      creator:  "AdzixIts",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738242044",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Bloom Hair",
      creator:  "y",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739282115",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "One Flesh, One End",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734041301",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Flag of Türkmenistan",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735822305",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Outline Tattoos Pack - Vol.1",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733598339",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "GameDevelopment",
      creator:  "Harvestminer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734656240",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Hello Kitty Classic UI Icons and Recolors",
      creator:  "DaemonOfEdenTTV",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740015384",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Five Nights at Freddy&#x27;s (FNAF) - Video Game",
      creator:  "Crypt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735834718",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Cheeks contour skin details 1.0",
      creator:  "𝕶eetard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735933469",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "No Hover Effects",
      creator:  "Dockamorpher",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732862841",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Jesters - NO Random Angry Moods",
      creator:  "cortneyhehe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734523818",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Skyzee Natural Living Vol.1",
      creator:  "Skyzee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739400730",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Graphic Design Screen Replacement",
      creator:  "TayeSimz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738252224",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Tribal Sleeve Tattoo V1",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737483097",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[KikoVanity] Sula Braids",
      creator:  "kikovanity",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739125881",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Battery Chair",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738047126",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Object Show Channel (WIP)",
      creator:  "troppe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738246185",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Resident Evil 9 Game",
      creator:  "JojoDanjo",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736445365",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Seto Kaiba Inspired Together Cards",
      creator:  "OpalMagnus",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734192926",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Vacuum Cleaner",
      creator:  "Danny Shepard",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739914875",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Funk Radio Station",
      creator:  "gnomeherbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735139123",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Sims Cheat Aliases",
      creator:  "Venomander",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733580162",
      status:   "Untested",
      category: "Live Mode · Cheats",
      notes:    ""
    },
    {
      name:     "One Apple Tall",
      creator:  "starmmiies",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734126363",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "RiskyIntimacy",
      creator:  "JacobG5",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733586444",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Base Game Separated (Radio, TV, PC, Books)",
      creator:  "Beebs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738130849",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Andy&#x27;s Room / Clouds Wallpaper",
      creator:  "mhmattman",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739714392",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Hugh Morris Jester Hat",
      creator:  "wannabeGarystu",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732828281",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Moving Fish Tank CC",
      creator:  "aspen707",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738248553",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Evolution Bundle - Jobs - Skills - Storyteller",
      creator:  "kamilalopesd",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738799802",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "No Double Canvases on the Same Easel Bug Fix",
      creator:  "HermanTheDragon",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737043703",
      status:   "Untested",
      category: "Live Mode · Bug Fix",
      notes:    ""
    },
    {
      name:     "DRINK AGE",
      creator:  "RASKORUSS2025",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740308550",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "[Fr0gz-R4ve] Coffin Shelf",
      creator:  "Fr0gz-R4ve",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737833912",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "RosiesBathroomClutter_RF",
      creator:  "RavensFury_RF",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739190364",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Pink Heart Selector",
      creator:  "martamoreira.91",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739679483",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Sculptor",
      creator:  "vaisha_yawn",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738053639",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "[CC Pack] Valorant Fade Hair, Accessories and Henna",
      creator:  "Fade lover",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733367691",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "All Out 90s Patterns",
      creator:  "lorinorear",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733680260",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "manymods",
      creator:  "biancasimonsgriggs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735938139",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "[LEONID] Four Wants",
      creator:  "Leonid",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734609090",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Turtleneck Sweater",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736217856",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "No Hover Effect",
      creator:  "Blubbiebacke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735262201",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "LoosePiggysLong",
      creator:  "Sosobun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736496611",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Russian Translation (Choch Studio)",
      creator:  "Чоч",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732881234",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "DDM LAB : Jirai Kei Makeup Set",
      creator:  "ddm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735637420",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Less Toddler Anger",
      creator:  "leyxcx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735865035",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Ikea Flaknan Mirror",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737330385",
      status:   "Untested",
      category: "Build/Buy · Mirror",
      notes:    ""
    },
    {
      name:     "R&amp;RB",
      creator:  "jusinthornburg",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738681881",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Play Monster Hunter World Iceborne",
      creator:  "Ezie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737380985",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Mechanic Career Track",
      creator:  "Phoenix662",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735675970",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Flash Tattoo Set 01",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734883018",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "BriCheese&#x27;s Paramatch Cropped Tank Top",
      creator:  "BriCheese",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737186510",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Canvas Prints",
      creator:  "Dizzle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734947836",
      status:   "Untested",
      category: "Build/Buy · Wall Decor",
      notes:    ""
    },
    {
      name:     "Flag of Azərbaycan",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735786500",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Skyzee&#x27;s Harmony Spa",
      creator:  "Skyzee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739835514",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "Alien Antenna",
      creator:  "tender sugar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734030992",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Butterfly Shelf",
      creator:  "Virne",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739921712",
      status:   "Untested",
      category: "Build/Buy · Shelf",
      notes:    ""
    },
    {
      name:     "Flop About",
      creator:  "Alyx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734702195",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Unbreakable items",
      creator:  "pink-lemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738395551",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "The Pegfect Table",
      creator:  "Berry <3 Archer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733943270",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Double Bun Hair",
      creator:  "Nyvrak",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734866297",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "RackBrasileiro90",
      creator:  "michelleclsouza25",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739646973",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Jarra de Abacaxi",
      creator:  "elimartinhos",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736627268",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Sliders 2x",
      creator:  "dirty dan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733690395",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "E-table",
      creator:  "Elowen",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737873592",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Flag of Qazaqstan",
      creator:  "Q",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735379008",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "GTA Tattoos - Emily",
      creator:  "wheresmimi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736661543",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Beehives - Collect Honey",
      creator:  "Claire",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735044069",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Pronouns",
      creator:  "0xMicrobits",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735429041",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "No Autonomous Phones",
      creator:  "leyxcx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733230245",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Sandwich Plushie",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737429756",
      status:   "Untested",
      category: "Build/Buy · Plushie",
      notes:    ""
    },
    {
      name:     "Needs Overhaul",
      creator:  "raybreeder7",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734565119",
      status:   "Untested",
      category: "Build/Buy · Overhaul",
      notes:    ""
    },
    {
      name:     "Coffee Table",
      creator:  "miaramirez5752",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740020409",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "Ninth House Skull Paint",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733113024",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Extra Games - Hitman: World of Assassination",
      creator:  "AlienXtream",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737793495",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Wainscot and Moldings",
      creator:  "dpitkin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735314207",
      status:   "Untested",
      category: "Build/Buy · Wall Texture",
      notes:    ""
    },
    {
      name:     "Buy any Property",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734687941",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Genetics Pro (Hair &amp; Eyes)",
      creator:  "blams",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734167717",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Beer Flirty Status- Tap Drink Mod",
      creator:  "dcalj",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734791338",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "1968 Ceiling Light",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733716994",
      status:   "Untested",
      category: "Build/Buy · Lighting",
      notes:    ""
    },
    {
      name:     "Success Rates",
      creator:  "sgranado88",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733807751",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "No Storyteller Funds - Gifts",
      creator:  "billpap15",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735435913",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Ela Antonówka",
      creator:  "Antonówka",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734522673",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "music michlael",
      creator:  "ERA",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740026966",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Juno 2-Piece Outfit [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737359622",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "CRUX - Sandrone hair",
      creator:  "CRUX",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737559202",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "State University Sweatshirt",
      creator:  "RipVanWinkle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735317613",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Favorite Inks by myshunosun",
      creator:  "myshunosun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732120005",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "[birdercrow] Saffron Top",
      creator:  "birdercrow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740072289",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Random Story Card From Pack",
      creator:  "null",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733998514",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "(~TA12~) Smaller Afro",
      creator:  "TheAngelsCove",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739623196",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "The Withered Bonnie Toilet",
      creator:  "renikeeyt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736515949",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Jesters - Less Angry &amp; Less Often",
      creator:  "cortneyhehe",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734523901",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Shar Illidari horns",
      creator:  "Enderphoenix_11",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735432844",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Toddler Passive Exp Gain for Skills",
      creator:  "Aubean",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737517723",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "Eyes of the Beholder",
      creator:  "Possumbreath",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739422286",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "No More Boredom from Learning",
      creator:  "HrBingR",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733989565",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "MaleHairBeitou",
      creator:  "把克里斯Daddy淦成夹心泡芙",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740162409",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Fix Body Preset Feminine Fat",
      creator:  "GloriousSunbeam",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736303672",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Csipkefüggöny 1x1",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740246532",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "Play Markus Ritter",
      creator:  "IsakuCosplay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736029568",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "BriCheese&#x27;s Broken Steam Workshop Example Mod",
      creator:  "BriCheese",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735378656",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "GreenHome",
      creator:  "CleanYoMan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739005049",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "jen",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740012506",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "BloodyMary",
      creator:  "broccoli",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739972134",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Abstract Tribal Sleeve Tattoo",
      creator:  "ZZee212",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737163504",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Vampire Spawn Bite Mark Tattoo",
      creator:  "PotoPotato",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734667297",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "English Translation: Set Two",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738192241",
      status:   "Untested",
      category: "Live Mode · Language",
      notes:    ""
    },
    {
      name:     "Visit School",
      creator:  "SimmyMom",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734365485",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Vanity Unit “Palermo”",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738328471",
      status:   "Untested",
      category: "Build/Buy · Furniture",
      notes:    ""
    },
    {
      name:     "Gothic Blue Rose Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740052382",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Pompompurin UI Pack !",
      creator:  "狂ㅤ  Goro  ㅤ𝆹ㅤ꒱",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738514742",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Ribbon - Honey glow non-default skin",
      creator:  "Ribbon_nya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739442235",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Better Conversations 2.0",
      creator:  "vigilantepanties",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736417090",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Computer Game - Monster Hunter Wilds",
      creator:  "Torllay",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734847883",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Simple Ear Point Slider",
      creator:  "Iristlypie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735151273",
      status:   "Untested",
      category: "Paramaker · Ear Slider",
      notes:    ""
    },
    {
      name:     "Twitch Streamer Job",
      creator:  "itzw33di_TTv",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738692916",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Nursery Clutter Pack",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735412011",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Gangsta Arm Tat 2",
      creator:  "artist",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737173362",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Ikea DVÄRGTALL Decor Set",
      creator:  "Kliekie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737918104",
      status:   "Untested",
      category: "Build/Buy · Decor",
      notes:    ""
    },
    {
      name:     "Tiny Home Trailer",
      creator:  "thexylerz",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740138350",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Babies and Toddlers Skill Overhaul",
      creator:  "robin",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737801349",
      status:   "Untested",
      category: "Build/Buy · Overhaul",
      notes:    ""
    },
    {
      name:     "Buffet",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739940179",
      status:   "Untested",
      category: "Build/Buy · Furniture",
      notes:    ""
    },
    {
      name:     "whimsy goose jpg",
      creator:  "niamhthare",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736929856",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "KR Retro Rug Set",
      creator:  "KubikRubik",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735805349",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Fat / Chubby Para Mark1",
      creator:  "[BotA]-Y2kBoRiS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734256459",
      status:   "Untested",
      category: "Paramaker · Body Sliders",
      notes:    ""
    },
    {
      name:     "Y2K Tattoos",
      creator:  "♥ Hex: On My Knees ♥",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734340461",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Rocket League",
      creator:  "Stubbs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734044315",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Emergency Medical Career",
      creator:  "König Panzerschlag",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737791682",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Edited Moon Orbit",
      creator:  "Witchblade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734067525",
      status:   "Untested",
      category: "Visual · Environment",
      notes:    ""
    },
    {
      name:     "\"Let me Live\" Hair",
      creator:  "Bis!",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739411598",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Play World of Warcraft in Paralives",
      creator:  "Lililine14",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734288751",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Starflower Pattern",
      creator:  "NyGirl976",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737525175",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Pencil and Pen Clutter",
      creator:  "Nysari",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734596843",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Semi-digi Pawed Legs",
      creator:  "asteriddle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733994227",
      status:   "Untested",
      category: "Paramaker · Body",
      notes:    ""
    },
    {
      name:     "Cyberpunk 2077 Game",
      creator:  "Rise",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735276454",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Rimworld Game",
      creator:  "Lyss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732917308",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "R&amp;RB",
      creator:  "Mr.Potato",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737271928",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Tattoo for Teen",
      creator:  "🐷 Pipupko 🐷",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736749283",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Watch The Eras Tour",
      creator:  "SG",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733503499",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "WinxStellaHair[lilSimsChef]",
      creator:  "lilSimsChef",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736133039",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Shortish wolf cut (CC) (hair)",
      creator:  "Celaziel",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734990961",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "images",
      creator:  "Bluetopia86",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738838827",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "IKEA PS Inflatable Chair",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735772941",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[Sveut-CC]_FeminineHairCollection01",
      creator:  "Sveut",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737362264",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Juno&#x27;s Tattoos: Witchy",
      creator:  "Егор",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733921679",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "School Bundle",
      creator:  "KawaiiStacie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734709215",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "MiniBEA5Ts BUILD MODE UI",
      creator:  "MiniBEA5T",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740049297",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Enter Rabbit Holes",
      creator:  "J_Whatever",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736173538",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Loneliness Need",
      creator:  "dcalj",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732983033",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Toothpaste Recolor",
      creator:  "parafern",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737853495",
      status:   "Untested",
      category: "Visual · Recolor",
      notes:    ""
    },
    {
      name:     "Low Level Potion",
      creator:  "TheParaGrimm",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736102167",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Invite to Current Lot Traducción al español",
      creator:  "ADimGaR",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737447081",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "Razor Blade Set",
      creator:  "Steinfeger",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737221472",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Parámon Tattoos | ChromatophoreCell",
      creator:  "ChromatophoreCell",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736671979",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "New Jobs",
      creator:  "RuCrip",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732963427",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "WaitingForLove Guiter Track",
      creator:  "senbipasa94",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735372373",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Outline Tattoos Pack - Vol.3",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734129503",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Play Resident Evil 2",
      creator:  "Pregnant Wesker",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735253107",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Geek Bar",
      creator:  "I <3 Twinks",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739391951",
      status:   "Untested",
      category: "Build/Buy · Furniture Pack",
      notes:    ""
    },
    {
      name:     "MessyLowBun",
      creator:  "Sosobun",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738537549",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Summer Vacation! Anime Hairs",
      creator:  "asteriddle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733303037",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "ParaTwerk",
      creator:  "SacrificialMods",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733978074",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Plastic Storage Bin",
      creator:  "coryanotado",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733918477",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Grandma&#x27;s Comfort Soup",
      creator:  "BellaDovah",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739206745",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "Cat Ears (necklace slot) [verynox]",
      creator:  "verynox",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733829464",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Branch Table",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737004595",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "3x Mores Wages",
      creator:  "Blubbiebacke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733385034",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Telescope Levels Astronomy",
      creator:  "ssabbyccatt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733482434",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "ParaJobs - Writers Occupations &amp; Skill",
      creator:  "Inkieeee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734613481",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Flip_Flop_Toddler1_JaruS",
      creator:  "JaruS",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736381324",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Smaller Cartoon Censor",
      creator:  "Bandito",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734089242",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Short Tucked Bob Hair",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738423860",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Planters OriginalGameAssets",
      creator:  "GoodOldPebbles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735664857",
      status:   "Untested",
      category: "Build/Buy · Plant",
      notes:    ""
    },
    {
      name:     "Simple Halo",
      creator:  "tender sugar",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734206219",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "TS3 Camera Controls",
      creator:  "StacySims",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737063875",
      status:   "Untested",
      category: "Visual · Camera",
      notes:    ""
    },
    {
      name:     "BriCheese&#x27;s Cute Lil Skull Tattoo",
      creator:  "BriCheese",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737530798",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Vivarium",
      creator:  "Mafloppi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735188494",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Oblivion Tattoo by LanaDelTaco",
      creator:  "Lana Del Taco",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733750610",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Wooden Heels",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738759634",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "White Mandala Selector",
      creator:  "fleabag",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734648901",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Star Cushion [Ruto]♡",
      creator:  "Ruto",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736062256",
      status:   "Untested",
      category: "Build/Buy · Pillow",
      notes:    ""
    },
    {
      name:     "My melody heart selector",
      creator:  "Len",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737558719",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "[Toddler] Hair WavyponytailCurtainbangs",
      creator:  "Pandapluschi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739271064",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Daydreamer Vibe",
      creator:  "cosmic daydreams",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735913579",
      status:   "Untested",
      category: "Live Mode · Emotions/Vibes",
      notes:    ""
    },
    {
      name:     "Owala 32oz",
      creator:  "catskins",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733637978",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Relative (Relationship Label)",
      creator:  "whitebag",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734372608",
      status:   "Untested",
      category: "Live Mode · Relationship",
      notes:    ""
    },
    {
      name:     "Goth Makeup Set 1",
      creator:  "\"Saint\" | Ω 480th Trench Digger",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734011025",
      status:   "Untested",
      category: "Paramaker · Makeup",
      notes:    ""
    },
    {
      name:     "Personality Stats NOT Required",
      creator:  "Sedona",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733608698",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Koi Fish Tattoo",
      creator:  "TransparentCee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736615252",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "{luuvis} Aurora&#x27;s Hair",
      creator:  "luuvis",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738010650",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Menstrual cycles",
      creator:  "Adora Shimmer",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737087001",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Birth Blooms: Traditional Floral Tattoo Collection",
      creator:  "PixelPevch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738626847",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Raine Hair [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737127371",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Wood Dresser &amp; Side Table",
      creator:  "Danny",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737187538",
      status:   "Untested",
      category: "Build/Buy · Dresser",
      notes:    ""
    },
    {
      name:     "Arcade Cabinet (Interactable) (WIP)",
      creator:  "aspen707",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736531016",
      status:   "Untested",
      category: "Build/Buy · Cabinet",
      notes:    ""
    },
    {
      name:     "Thirst Need",
      creator:  "llazyneiph",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737339121",
      status:   "Untested",
      category: "Live Mode · Needs",
      notes:    ""
    },
    {
      name:     "Infinite Bandaids",
      creator:  "HatCat",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733936502",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Terrain Precision",
      creator:  "Paralena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739117205",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ParaPlum Blue",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734210944",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "R&amp;RB",
      creator:  "defender~",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736701956",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Sötétítő függöny 2x1",
      creator:  "xadurgan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740247441",
      status:   "Untested",
      category: "Build/Buy · Curtain",
      notes:    ""
    },
    {
      name:     "IKEA Stockholm sideboard",
      creator:  "DontPanicRem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734585358",
      status:   "Untested",
      category: "Build/Buy · Storage",
      notes:    ""
    },
    {
      name:     "Manufacturing Jobs",
      creator:  "Nucifero",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735983487",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Strawberry Matcha Needs UI 2.0",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735545324",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Mouse Ears",
      creator:  "RipVanWinkle",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735744833",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Play Enter the Gungeon",
      creator:  "Mia_is_a_joke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737038070",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Skin Details Unlocked",
      creator:  "Nyami",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735971304",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "A House",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739910623",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "Higher Bills",
      creator:  "Ezuu.",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733007206",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Bug Antennae",
      creator:  "Vesp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738114097",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Simple Eyes",
      creator:  "garfanders",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736483509",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Curly Facial Hair",
      creator:  "chaoticcylinder",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739250086",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Kuromi UI Icons and Recolors",
      creator:  "DaemonOfEdenTTV",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737830638",
      status:   "Untested",
      category: "Visual · UI Icons",
      notes:    ""
    },
    {
      name:     "Layer Hair Infinitely",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734938249",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "VTM Shadows of NY PC Game",
      creator:  "ForbiddenSlurp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737593865",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Owl&#x27;s Y2k Top",
      creator:  "TheOwlManBranch",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734171705",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Battered Fish &amp; Chips",
      creator:  "Erin Brazeau",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739007655",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "No School for Teens",
      creator:  "Blubbiebacke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734980792",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Learn triangle on computer",
      creator:  "lygan",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735501784",
      status:   "Untested",
      category: "Live Mode · Skill",
      notes:    ""
    },
    {
      name:     "School Fee",
      creator:  "MssMing",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737511639",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Pretty Poison Tattoo",
      creator:  "DivinityArt",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738976962",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "More Watches",
      creator:  "Danp",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737796916",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "No Choice Story Cards",
      creator:  "spookkyfoxx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733026170",
      status:   "Untested",
      category: "Live Mode · Story Cards",
      notes:    ""
    },
    {
      name:     "Don&#x27;t Cancel Everything",
      creator:  "anissims",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736871036",
      status:   "Untested",
      category: "Live Mode · Behavior",
      notes:    ""
    },
    {
      name:     "Long braids hairstyle",
      creator:  "alumia",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739365456",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "[Zomb] Kitchen Tool Clutter",
      creator:  "Zombyrie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737043916",
      status:   "Untested",
      category: "Build/Buy · Clutter",
      notes:    ""
    },
    {
      name:     "Guage/Plug Earrings",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737977993",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "Faster this faster that",
      creator:  "Odrez",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736950683",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Eye Studio",
      creator:  "KittHaven",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737653080",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Paralives Game",
      creator:  "Lyss",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733321136",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Huge Households",
      creator:  "TheVoidIsBees",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735413385",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Black Fleur De Lis Selector",
      creator:  "kirby64s",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739722623",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "Kids Can Exercise",
      creator:  "mike",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736522934",
      status:   "Untested",
      category: "Live Mode · Interaction",
      notes:    ""
    },
    {
      name:     "More Realistic Lifespans",
      creator:  "Plonger",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733352721",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Gecko Terrarium",
      creator:  "Shoobly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733552102",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Loaded Lots",
      creator:  "A Tomboy With Abs",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733085956",
      status:   "Untested",
      category: "Build/Buy · House",
      notes:    ""
    },
    {
      name:     "EyeLiner DeadLock",
      creator:  "bx",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733146948",
      status:   "Untested",
      category: "Paramaker · Hair",
      notes:    ""
    },
    {
      name:     "Miles&#x27;s Paramaker Tweaks",
      creator:  "Miles_Miles",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737516129",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "Grungy Tattoo Set",
      creator:  "elokko",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737536851",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Star Heels",
      creator:  "MargaritaMamba",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733025829",
      status:   "Untested",
      category: "Paramaker · Shoes",
      notes:    ""
    },
    {
      name:     "Dungeon Crawler Carl - Carl&#x27;s Boxers Pattern",
      creator:  "WhiteWolf",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738885088",
      status:   "Untested",
      category: "Paramaker · Skin Pattern",
      notes:    ""
    },
    {
      name:     "InkAnywhere",
      creator:  "T0M1",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737643011",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Extendable Dining Table",
      creator:  "Mattically",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737462415",
      status:   "Untested",
      category: "Build/Buy · Table",
      notes:    ""
    },
    {
      name:     "True Colors - A Paralives Color Filter",
      creator:  "Pvydrow",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734710331",
      status:   "Untested",
      category: "Visual · Filter",
      notes:    ""
    },
    {
      name:     "SANDYS MODS",
      creator:  "danielaisc95",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738821212",
      status:   "Untested",
      category: "Uncategorized",
      notes:    ""
    },
    {
      name:     "Z&#x27;s Top Surgery Scar Pack",
      creator:  "itshalstri",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739320240",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Enable Townie Autofill",
      creator:  "primokitty",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735221082",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "{My Chemical Romance Tattoo Pack}",
      creator:  "miscellayneous",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3738360307",
      status:   "Untested",
      category: "Paramaker · Tattoo",
      notes:    ""
    },
    {
      name:     "Bear, Leather, Puppy and Rubber Pride Flag",
      creator:  "Etny00",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733763740",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Stubble [Rikalix]",
      creator:  "Rikalix",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734553441",
      status:   "Untested",
      category: "Paramaker · Facial Hair",
      notes:    ""
    },
    {
      name:     "Smooth Skin | Kid/Preeteen/Teen Skin Override",
      creator:  "CertifiedSilly",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733117008",
      status:   "Untested",
      category: "Paramaker · Skin",
      notes:    ""
    },
    {
      name:     "Para Detoonification",
      creator:  "kaestralblades",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733046030",
      status:   "Untested",
      category: "Visual · Graphics",
      notes:    ""
    },
    {
      name:     "Trans Pride Flag Needs UI",
      creator:  "Maple",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733476388",
      status:   "Untested",
      category: "Visual · UI",
      notes:    ""
    },
    {
      name:     "ParaCurio:CowPrintNails",
      creator:  "Salem",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739715602",
      status:   "Untested",
      category: "Paramaker · Nails",
      notes:    ""
    },
    {
      name:     "Storyteller Betina",
      creator:  "SiiBee",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3740335038",
      status:   "Untested",
      category: "Live Mode · Storyteller",
      notes:    ""
    },
    {
      name:     "Easier Try for a baby",
      creator:  "Kirashi",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734563973",
      status:   "Untested",
      category: "Live Mode · Game Mechanic",
      notes:    ""
    },
    {
      name:     "Brazil Core Pack | Brazilian Objects Kit",
      creator:  "BySimtect",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737234507",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Türkçe yama",
      creator:  "貓毛供應商",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733845951",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    },
    {
      name:     "No Aging",
      creator:  "RuCrip",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3732985918",
      status:   "Untested",
      category: "Live Mode · Lifespan",
      notes:    ""
    },
    {
      name:     "Stop Shaking When Deleting",
      creator:  "Maya",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735373595",
      status:   "Untested",
      category: "Paramaker · Clothing",
      notes:    ""
    },
    {
      name:     "Subtle Time Speed Audio",
      creator:  "NecroRena",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734147302",
      status:   "Untested",
      category: "Visual · Audio",
      notes:    ""
    },
    {
      name:     "Simple fangs set",
      creator:  "Enderphoenix_11",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736574943",
      status:   "Untested",
      category: "Paramaker · Accessories",
      notes:    ""
    },
    {
      name:     "Fez",
      creator:  "Outcast",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733668207",
      status:   "Untested",
      category: "Paramaker · Hat",
      notes:    ""
    },
    {
      name:     "Quack-tastic Collection",
      creator:  "Chtulhu [Z]ombie",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737996841",
      status:   "Untested",
      category: "Build/Buy · Decoration",
      notes:    ""
    },
    {
      name:     "Age Overhaul Mod",
      creator:  "chefdeloups",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734498704",
      status:   "Untested",
      category: "Build/Buy · Overhaul",
      notes:    ""
    },
    {
      name:     "Jewelry Box",
      creator:  "Cornbread",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3739174415",
      status:   "Untested",
      category: "Paramaker · Jewelry",
      notes:    ""
    },
    {
      name:     "USSR Carpet",
      creator:  "Admiral.Slowpoke",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3733226308",
      status:   "Untested",
      category: "Build/Buy · Rug",
      notes:    ""
    },
    {
      name:     "Realistic Career Progression",
      creator:  "Nucifero",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3736662502",
      status:   "Untested",
      category: "Live Mode · Career",
      notes:    ""
    },
    {
      name:     "Hollow Eyes",
      creator:  "Alliemonade",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735870545",
      status:   "Untested",
      category: "Paramaker · Eyes",
      notes:    ""
    },
    {
      name:     "Skill Gains Overhaul",
      creator:  "raybreeder7",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3734497895",
      status:   "Untested",
      category: "Build/Buy · Overhaul",
      notes:    ""
    },
    {
      name:     "Play To ACNH",
      creator:  "Sony Zino",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3737140992",
      status:   "Untested",
      category: "Live Mode · Entertainment",
      notes:    ""
    },
    {
      name:     "Türkçe Yerelleştirme - (v0.2)",
      creator:  "Coffeeicus",
      link:     "https://steamcommunity.com/sharedfiles/filedetails/?id=3735595345",
      status:   "Untested",
      category: "Live Mode · Translation",
      notes:    ""
    }
  ]

};