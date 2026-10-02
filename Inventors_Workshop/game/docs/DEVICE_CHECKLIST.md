# Real-device checklist — Inventors Workshop

Run this on a phone after `npm run build` and `npx cap sync android`. Do not treat a screenshot as a pass.

- [ ] The app opens to Inventors Workshop without a blank crash screen.
- [ ] The first launch shows the tutorial. Skip or finish it.
- [ ] A later launch does not show the tutorial again.
- [ ] Tap each tray part: small, medium, and large gears, motor, pulley, wheel, spring, hinge, switch, and block. Each one appears on the workspace.
- [ ] Drag a part to move it. Select it, then Rotate and Delete.
- [ ] Turn on Connect and tap two parts. A line joins them. A pulley-to-wheel link is dashed.
- [ ] Press Play. Connected parts turn. Press Pause and the motion stops.
- [ ] Drive a small gear and a large gear from the motor. The speed line shows the large gear slower than the small gear.
- [ ] Save, leave the app, reopen, and Load. The same machine comes back.
- [ ] Test the machine against “Big gears turn slowly” and see the goal complete.
- [ ] Export a JSON file, then Import that file into an empty workspace.
- [ ] Settings shows the privacy policy link, and it uses the single in-app URL.
- [ ] Clear All Data asks for confirmation, then says the data was cleared.
- [ ] Force-close and reopen. The workshop is empty, progress is 0/20, and the tutorial is back. Old machines are not restored.
