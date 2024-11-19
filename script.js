/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': ' A city road at night with bright lights and a calm atmosphere, with cars appearing to be driving regularly ',
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': ' A beautiful scene on the beach shows the sunset, where the sky appears in a wonderful golden color, full of calm and comfort, and the sea is calm ',
        'name': 'build gauge with css.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': ' A car road in the mountains facing the sea ',
        'name': 'video3.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': ' Video shows a car driving ',
        'name': 'customize HTML5 form elements.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': ' The rain fell beautifully on the lake ',
        'name': 'custom select box.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': ' Rain falling on green tree leaves ',
        'name': 'embed google map to contact form.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': ' Video of the waterfall water falling from the top onto the stones ',
        'name': 'password strength checker javascript web app.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'Black Video',
        'name': 'custom range slider.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'Blank Video',
        'name': 'animated shopping cart.mp4',
        'duration': '3:38',
        
    },
    

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';
// adding a title 'ammar'
main_video_title.innerHTML = data[0].title
// 

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

/*let data = [{
  'thumbnail':'imsges/Background-image-blue.jpg'
}]
 document.body.style.setProperty('--url','url(images/'+match_video.thumbnail+')');
 
 videos.forEach(selected_video =>{
   selected_video.onclick = () =>{
     
     docment.body.style.setProperty('--url', 'ur(images/'+match_video.thumbnail+')');
   }
 }); */

