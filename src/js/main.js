jQuery(document).ready(function () {
    let  filterContainer = jQuery('.grid');
    filterContainer.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    filterContainer.masonry();
})