/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-box'
    // });

});

function clip(copyT){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = copyT;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("["+copyT+"]" + " 복사 완료");
}

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "toast show";
    setTimeout(function() {
        toast.className = toast.className.replace("show", "hide");
    }, 3000);
}

// 모달 열기 함수
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var downloadButton = document.getElementById("downloadButton");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    downloadButton.onclick = function() {
        downloadImage(imageSrc);
    };
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function downloadImage(imageSrc) {
    var link = document.createElement("a");
    link.href = imageSrc;
    link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 모달 외부를 클릭하면 모달을 닫음
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}

function shareToBand() {
    var shareUrl = "https://hataewedding.github.io"; // 공유할 URL
    var encodedShareUrl = encodeURIComponent(shareUrl);
    var bandAppUrl = `bandapp://create/post?text=${encodedShareUrl}`;

    window.location.href = bandAppUrl;
}


imgUrl = 'https://HaTaeWedding.github.io';

// 카카오톡 공유시 이미지, 제목, 설명, 링크 설정
Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
        title: '태훈&하영 결혼합니다',
        description: '10/12(토), 제주 썬호텔 3층 The Ballroom',
        imageUrl: imgUrl + '/assets/img/main.jpg',
        link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'https://hataewedding.github.io',
            webUrl: 'https://hataewedding.github.io',
        },
    },
    buttons: [
        {
            title: '청첩장 보기',
            link: {
                mobileWebUrl: 'https://hataewedding.github.io',
                webUrl: 'https://hataewedding.github.io',
            },
        },

    ],
});

//화면 서서히 보이게 설정
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-element');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번만 애니메이션 실행
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Fancybox 플러그인을 활성화합니다.
document.addEventListener("DOMContentLoaded", function() {
    Fancybox.bind("[data-fancybox='gallery']", {
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "close",
            ],
        },
        touch: {
            vertical: false, // 수직 스크롤을 비활성화하여 확대를 막습니다.
            momentum: false, // 탄력 스크롤을 비활성화합니다.
        },
        zoom: false, // 확대 기능 비활성화
        clickContent: false, // 클릭하여 확대 비활성화
        clickSlide: false, // 슬라이드 클릭하여 확대 비활성화
        wheel: false, // 마우스 휠로 확대 비활성화
        animationEffect: "fade", // 애니메이션 효과 최소화
        animationDuration: 300, // 애니메이션 지속 시간 단축
        transitionEffect: "fade", // 전환 효과 최소화
        transitionDuration: 300, // 전환 지속 시간 단축
        hideScrollbar: false, // 스크롤바 숨김 비활성화 (옵션, 스크롤바를 항상 보여줌)
        preload: 4, // 다음 이미지를 미리 로드하여 성능 향상
    });
});
