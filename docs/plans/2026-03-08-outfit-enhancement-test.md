# Test Plan for Rapper & Fairy Outfit Enhancements

## 1. Rapper Outfit Verification
- [ ] Select "Rapper 🎤" from the popup menu.
- [ ] **Cap:** Verify the cap is a blue snapback with "NY" text and a flat brim.
- [ ] **Shades:** Verify the shades are "stunner" style (dark with gradient) and cover the eyes.
- [ ] **Chain:** Verify the chain is thick gold with a "$" pendant.
- [ ] **Animations:**
    - [ ] Verify the head bobs to the beat (`rapper-bob` animation).
    - [ ] Verify the pendant glints (`chain-glint` animation).

## 2. Fairy Outfit Verification
- [ ] Select "Fairy 🧚" from the popup menu.
- [ ] **Wings:** Verify the wings are double-layered, translucent blue/cyan.
- [ ] **Wand:** Verify the wand has a star tip and sparkles.
- [ ] **Tiara:** Verify the tiara is visible on the head with purple gems.
- [ ] **Animations:**
    - [ ] Verify the wings flutter (`fairy-flutter` animation).
    - [ ] Verify the wand floats gently (`wand-float` animation).
    - [ ] Verify the wand sparkles are animating.

## 3. General Checks
- [ ] Switch between outfits (None -> Rapper -> Fairy -> King -> Lady).
- [ ] Ensure no artifacts remain from previous outfits.
- [ ] Ensure "Sleep Mode" still works with outfits (eyes close, Zzz marks appear).
- [ ] Ensure "Angry Mode" overrides outfit expressions if applicable (though Rapper shades might hide eyes, angry eyebrows should ideally be visible or shades might block them - current logic hides `eyes-normal` for Rapper, so angry eyes might need to be checked).
    - *Note:* The code hides `#panda-eyes-normal` for Rapper. Angry eyes use `browL`, `browR` and mouth changes. These should still be visible above/around shades or simply acceptable as "masked".

## 4. Performance
- [ ] Check for any lag during animations.
