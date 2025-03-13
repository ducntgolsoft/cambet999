function drawBorder(container_class = "border-container", svg_id = "border-svg") {
    let container = document.querySelector(`.${container_class}`);
    let svg = document.getElementById(svg_id);
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let pathData = `M 0 ${height / 2} 
            H ${width * 0.2} 
            L ${width * 0.3} 60 
            H ${width * 0.7} 
            L ${width * 0.8} ${height / 2} 
            H ${width}`;
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", "#181C28");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.innerHTML = '';
    svg.appendChild(path);
}

$(document).ready(function () {
    $("#header").load("./components/header.html", function () {
        $('#nav-menu .nav-link').each(function() {
            if ($(this).attr('href') == window.location.pathname) {
                $(this).addClass('text-BDF309 border-bottom-linear-gradient').removeClass('text-secondary');
            } else {
                $(this).addClass('text-secondary').removeClass('text-BDF309 border-bottom-linear-gradient');
            }
            if(window.location.pathname == '/'){
                $('a[href="/index.html"]').addClass('text-BDF309 border-bottom-linear-gradient').removeClass('text-secondary');
            }
        });

        $('#nav-menu-mobile .nav-link').each(function() {
            if ($(this).attr('href') == window.location.pathname) {
                $(this).addClass('text-success border-bottom border-success').removeClass('text-secondary');
            } else {
                $(this).addClass('text-secondary').removeClass('text-success border-bottom border-success');
            }
            if(window.location.pathname == '/'){
                $('a[href="/index.html"]').addClass('text-success border-bottom border-success').removeClass('text-secondary');
            }
        });
    });
    $("#footer").load("./components/footer.html");
    drawBorder('hotgame-container', 'hotgame-border-svg');
    window.addEventListener("resize", drawBorder);
});

$(document).on('click', '.btn-copy', function () {
    var clipboard_text = $(this).attr('data-clipboard-text');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(clipboard_text).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copied to clipboard!');
})