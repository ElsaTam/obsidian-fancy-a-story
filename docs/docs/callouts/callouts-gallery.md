---
parent: Callouts
title: Callouts gallery
layout: minimal
---

<div class="masonry" id="macy-container">
<a class="masonry-item" href="{% link docs/callouts/autopsy.md %}"><img src="{% link images/callouts/autopsy.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/cards-deck.md %}">
<img src="{% link images/callouts/cards-deck.webp %}"><br>
<img src="{% link images/callouts/cards-deck-gif.webp %}">
</a>
<a class="masonry-item" href="{% link docs/callouts/clue.md %}">
<img src="{% link images/callouts/clue-b.webp %}"><br>
<img src="{% link images/callouts/clue-c.webp %}"><br>
<img src="{% link images/callouts/clue-d.webp %}"><br>
<img src="{% link images/callouts/clue-ripped-a.webp %}">
</a>
<a class="masonry-item" href="{% link docs/callouts/comic.md %}"><img src="{% link images/callouts/comic.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/conversation.md %}"><img src="{% link images/callouts/conversation.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/email.md %}"><img src="{% link images/callouts/email.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/fas-infobox.md %}"><img src="{% link images/callouts/fas-infobox-1.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/film-strip.md %}"><img src="{% link images/callouts/film-strip.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/letter.md %}"><img src="{% link images/callouts/letter.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/paper-fold.md %}"><img src="{% link images/callouts/paper-fold.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/pinned.md %}"><img src="{% link images/callouts/pinned.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/poem.md %}">
<img src="{% link images/callouts/poem.webp %}">
<img src="{% link images/callouts/poem-frame.webp %}">
<img src="{% link images/callouts/poem-floral.webp %}">
</a>
<a class="masonry-item" href="{% link docs/callouts/polaroid.md %}"><img src="{% link images/callouts/polaroid-center.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/profile.md %}"><img src="{% link images/callouts/profile.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/screen.md %}"><img src="{% link images/callouts/screen.webp %}"></a>
<a class="masonry-item" href="{% link docs/callouts/timeline.md %}">
<img src="{% link images/callouts/timeline.webp %}"><br>
<img src="{% link images/callouts/timeline-horizontal.webp %}">
</a>
</div>




<!-- https://github.com/bigbite/macy.js -->
<script src="https://cdn.jsdelivr.net/npm/macy@2"></script>

<script>
var macyInstance = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: true,
    margin: 24,
    columns: 5,
    breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
    }
});
</script>