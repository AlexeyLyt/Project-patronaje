<template>
    <b-container class="container-lg footer">

      <div class="footer-first-item">
        <div class="footer-item logo">
          <a class="link-logo" href="">
            <LogoSvg class="logo-svg" />
          </a>
        </div>
        <div class="footer-item email">
           <div class="icon">
                <MailSvg class="icon-item" />
            </div>
            <div class="text">
                <a class="mail-to" href="mailto:floris-med@yandex.ru">grand-personal@yandex.ru</a>
                <p class="text-item">Работаем круглосуточно<br>без выходных</p>
            </div>
        </div>
        <div class="footer-item adress">
          <div class="icon">
              <AdressSvg class="icon-item" />
          </div>
          <div class="text">
              ул. Мажоров переулок <br> ст. 8 корп. 2
          </div>
        </div>
        <div class="footer-item phone">
          <div class="icon">
              <PhoneSvg class="icon-item" />
          </div>
          <div class="text">
              <span class="text-item">+7(963)755-65-47</span>
              <span class="text-item">+7(499)674-58-35</span>
          </div>
        </div>
      </div>

      <hr>

      <div class="footer-second-item">
        <div class="footer-nurses">
          <a href="">Сиделка для лежачего больного</a>
          <a href="">Сиделка с проживанием</a>
          <a href="">Сиделка в больницу</a>
          <a href="">Медсестра на дом</a>
        </div>
        <div class="footer-nurses">
          <a href="">Уход за больными</a>
          <a href="">Уход за престарелыми</a>
          <a href="">Анкеты сиделок</a>
        </div>
        <div class="footer-about">
          <a href="">О компании</a>
          <a href="">Стоимость</a>
          <a href="">Контакты</a>
          <a href="">Отзывы</a>
        </div>
        <div class="footer-about">
          <a href="">Статьи</a>
          <a href="">Вакансии</a>
          <a href="">Карта сайта</a>
        </div>
        <div class="footer-callback">
          <a class="callback-footer-btn" href="">Обратный звонок</a>
        </div>
      </div>  

    </b-container>
</template>

<script>
import LogoSvg from '../../assets/svg/logo-test.svg'
import MailSvg from '../../assets/svg/mail.svg'
import AdressSvg from '../../assets/svg/adress.svg'
import PhoneSvg from '../../assets/svg/phone.svg'

export default {
  components: { LogoSvg, MailSvg, AdressSvg, PhoneSvg },
  data() {
    return {
        
    };
  },
  methods: { }
};
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
  &-first-item {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    .footer-item {
      // flex-grow: 1;
      display: flex;
      .icon {
        width: 32px;
        margin-right: 5px;
      }
    }
    .footer-item.logo {
      display: block;
      flex-grow: 0.5;
      .link-logo {
        display: block;
        #logo-svg {
          #logo-text {
            fill: white;
          }
        }
      }
    }
    .footer-item.email {
      .text {
        text-align: left;
        .mail-to {
          color: white;
          font-size: 14px;
          line-height: 14px;
          display: block;
          font-weight: 800;
          margin-bottom: 3px;
          &:hover {
              text-decoration: none;
          }
        }
        &-item {
          margin-bottom: 0;
          color: white;
          font-size: 12px;
          font-weight: 900;
          line-height: 14px;
        }
      }
      .icon {
        &-item {
          #mail-svg-border {
            fill: white;
          }
        }
      }
    }
    .footer-item.adress {
      .text {
          text-align: left;
          line-height: 14px;
          font-size: 14px;
          font-weight: 700;
          color: white;
      }
      .icon {
        &-item {
          #adress-svg-fill {
            fill: white;
          }
        }
      }
    }
    .footer-item.phone {
      .text-item {
        font-size: 14px;
        font-weight: 700;
        display: block;
        color: white;
      }
      .icon {
        &-item {
          #phone-svg-fill {
            fill: white;
          }
        }
      }
    }
  }
  hr {
    width: 100%;
    background: white;
  }
  &-second-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .footer-nurses,
    .footer-about {
      text-align: left;
      width: fit-content;
      a {
        display: block;
        color: white;
        font-size: 15px;
        font-weight: 700;
        transition: color .1s;
        &:hover {
          color: #29abe2;
          text-decoration: none;
          transition: color .1s;
        }
      }
    }
    .footer-callback {
      .callback-footer-btn {
        border: 2px solid white;
        display: block;
        height: 50px;
        width: 170px;
        line-height: 47px;
        color: white;
        font-weight: 700;
        font-size: 15px;
        transition: all .2s;
        &:hover {
          text-decoration: none;
          transition: all .2s;
          color: #32325d;
          background: white;
        }
      }
    }
  }
}
</style>
