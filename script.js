document.addEventListener('DOMContentLoaded', function () {
    //Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Service Button function
    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            const allDetailsSections = document.querySelectorAll('.services-details');
            allDetailsSections.forEach(section => {
                if(section.id === targetId){
                    section.classList.remove('hidden');
                }else{
                    section.classList.add('hidden')
                }
            });
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

   // Mobile menu toggle
   const menuToggle = document.querySelector('.menu-toggle');
   const navWrapper = document.querySelector('.nav-wrapper');

   menuToggle.addEventListener('click', function () {
       navWrapper.classList.toggle('open');
       menuToggle.classList.toggle('open')
   });

    // Pop-up elements
    const enrollPopup = document.getElementById('enroll-popup');
    const moreInfoPopup = document.getElementById('more-info-popup');
    const closePopups = document.querySelectorAll('.close-popup');

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        // "Записаться" button event
        card.querySelector('.service-button-enroll').addEventListener('click', function() {
            const serviceName = card.querySelector('.service-title').textContent;
            document.getElementById('service').value = serviceName; // fill in the service
            enrollPopup.classList.remove('hidden'); // opens popup
        });
        // "Узнать больше" button event
        card.querySelector('.service-button-more').addEventListener('click', function() {
            const serviceData = card.dataset.service; // get the name from dataset
            openMoreInfoPopup(serviceData); // open popup by dataset name
        });
    });
    // close all popups
    closePopups.forEach(closeButton => {
      closeButton.addEventListener('click', function () {
           enrollPopup.classList.add('hidden');
           moreInfoPopup.classList.add('hidden');
      });
    });

    // PopUp more information details
    function openMoreInfoPopup(serviceName){
        let title = '';
        let description = '';
        let imageSrc ='';
        let age = '';
        switch(serviceName){
            case 'logoped':
                title = 'Логопед';
                description = 'Индивидуальные занятия с логопедом направлены на коррекцию нарушений речи, развитие фонематического слуха и артикуляционной моторики. На занятиях используются разнообразные методики и игры для создания комфортной и интересной обучающей среды для детей. ';
                imageSrc = 'images/tp.jpg';
                age = 'Возраст: с 2 лет';
                break;
           case 'start_speech':
                title = 'Запуск речи';
                description = 'Специализированная программа для детей с задержкой речевого развития. Программа включает методы стимуляции речи, развитие понимания речи и формирование активного словарного запаса, учитывая индивидуальные особенности каждого ребенка.';
                 imageSrc = 'images/tp.jpg';
                age = 'Возраст: с 2 лет';
                break;
           case 'logopedic_massage':
                title = 'Логопедический массаж';
                description = 'Мягкие техники массажа для нормализации тонуса мышц артикуляционного аппарата. Помогает улучшить дикцию, убрать гипертонус или гипотонус, улучшить речевые процессы. ';
                 imageSrc = 'images/tp.jpg';
                 age = 'Возраст: с 2 лет';
                break;
           case 'defectologist':
                title = 'Дефектолог';
                description = 'Индивидуальные занятия с дефектологом, направленные на коррекцию различных нарушений развития и адаптацию к обучению. Занятия включают дидактические игры, упражнения и задания для развития высших психических функций.';
                 imageSrc = 'images/tp.jpg';
                  age = 'Возраст: с 6 лет';
                break;
             case 'psychologist':
                title = 'Психолог';
                description = 'Психологическая помощь детям и взрослым. Индивидуальные консультации, семейная психотерапия, работа с эмоциональными расстройствами, развитие социальных навыков и решение конфликтных ситуаций.';
                 imageSrc = 'images/tp.jpg';
                 age = 'Возраст: с 6 лет и взрослые';
                 break;
            case 'neuropsychologist':
                title = 'Нейропсихолог';
                description = 'Диагностика и коррекция нарушений высших психических функций, связанных с работой головного мозга. Занятия включают нейропсихологические игры и упражнения для улучшения внимания, памяти, мышления и речи.';
                 imageSrc = 'images/tp.jpg';
                age = 'Возраст: с 6 лет';
                 break;
             case 'lfk':
                title = 'ЛФК';
                description = 'Лечебная физкультура для детей, включающая упражнения, направленные на улучшение осанки, координации движений, развития мышечной силы и общей моторики. Подход индивидуален к каждому ребёнку.';
                imageSrc = 'images/tp.jpg';
                age = 'Возраст: с 6 лет';
                 break;
             case 'afk':
                title = 'АФК';
                description = 'Адаптивная физическая культура - это комплекс мер для реабилитации и адаптации детей с различными ограничениями в физическом развитии. На занятиях используются индивидуальные программы и упражнения для развития силы, выносливости и координации.';
                 imageSrc = 'images/tp.jpg';
                 age = 'Возраст: с 6 лет';
                 break;
             case 'communication_group':
                  title = 'Коммуникативная группа';
                   description = 'Занятия в группе для детей с РАС и аутизмом направлены на развитие социальных и коммуникативных навыков, умение взаимодействовать в коллективе, а также формирование умения соблюдать правила и проявлять эмпатию.';
                 imageSrc = 'images/tp.jpg';
                  break;
             case 'group_temporary_stay':
                 title = 'Группа временного пребывания';
                 description = 'Группа временного пребывания для детей с аутизмом (до 4 часов) - это возможность для родителей оставить ребенка под присмотром квалифицированных специалистов, пока они заняты своими делами, а для ребенка это будет возможностью социализироваться и научиться новому';
                  imageSrc = 'images/tp.jpg';
                 age = 'Возраст: до 4 часов';
                  break;
             case 'friend_with_emotions':
                 title = 'Дружу с эмоциями';
                 description = 'Игры с психологом, направленные на развитие эмоционального интеллекта у детей. На занятиях используются ролевые игры, задания и упражнения для понимания и управления своими эмоциями, а также для развития эмпатии и социальных навыков.';
                   imageSrc = 'images/tp.jpg';
                 age = 'Возраст: с 6 лет';
                   break;
            default:
                 title ='';
                 description ='';
                 imageSrc ='';
                 age = '';
                break;
        }
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-description').textContent = description;
        document.getElementById('popup-age').textContent = age;
        document.getElementById('popup-image').src = imageSrc;
        moreInfoPopup.classList.remove('hidden');
        moreInfoPopup.querySelector('.popup-enroll-button').onclick = () =>{
            document.getElementById('service').value = title;
            enrollPopup.classList.remove('hidden');
            moreInfoPopup.classList.add('hidden');
        }
    }
  // Обработка отправки формы
  const enrollForm = document.getElementById('enroll-form');
  enrollForm.addEventListener('submit', function(event){
        event.preventDefault();
        // Здесь можно добавить код для отправки данных формы
      alert('Форма отправлена!');
       enrollPopup.classList.add('hidden');
     enrollForm.reset();
    });
});
