const post_box_container = document.getElementById('post-box-container') as HTMLElement;

if (post_box_container) {
    const sortable = new Sortable.create(post_box_container, {
        handle: '#grid-icon',
        touchStartThreshold: 10,
        filter: ".add-box",
        onMove: function(event:any) {
            return event.related.className.indexOf('add-box') === -1;
        },
        animation: 150
    });
}
