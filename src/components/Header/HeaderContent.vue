<template>
    <b-container class="container-header" fluid>
        <div class="header-item logo">
            <a class="link-logo" href="">
                <!-- <img src="../../assets/svg/logo-test.svg"> -->
                <LogoSvg class="logo-svg" />
            </a>
        </div>
        <div class="header-item">
            <div class="email">
                <div class="icon">
                    <MailSvg class="icon-item" />
                </div>
                <div class="text">
                    <a class="mail-to" href="mailto:floris-med@yandex.ru">grand-personal@yandex.ru</a>
                    <p class="text-item">Работаем круглосуточно<br>без выходных</p>
                </div>
            </div>
            <div class="adress">
                <div class="icon">
                    <AdressSvg class="icon-item" />
                </div>
                <div class="text">
                    ул. Мажоров переулок <br> ст. 8 корп. 2
                </div>
            </div>
            <div class="phone">
                <div class="icon">
                    <PhoneSvg class="icon-item" />
                </div>
                <div class="text">
                    <span class="text-item">+7(963)755-65-47</span>
                    <span class="text-item">+7(499)674-58-35</span>
                </div>
            </div>
        </div>
        <div class="header-item callback">
            <a href="#" class="callback-btn">Обратный звонок</a>
        </div>
    </b-container>
</template>

<script>
import LogoSvg from '../../assets/svg/logo-test.svg'
import AdressSvg from '../../assets/svg/adress.svg'
import MailSvg from '../../assets/svg/mail.svg'
import PhoneSvg from '../../assets/svg/phone.svg'

export default {
    components: {
        LogoSvg,
        AdressSvg,
        MailSvg,
        PhoneSvg
    }
}
</script>

<style lang="scss" scoped>
.container-header {
    // height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px 30px;
    .header-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .email, .adress, .phone {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 10px;
        }
        .icon {
            margin-right: 5px;
            // padding-top: 3px;
            .icon-item {
                width: 32px;
            }
        }
        .email {
            .text {
                text-align: left;
                .mail-to {
                    color: black;
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
                    color: #00000082;
                    font-size: 12px;
                    font-weight: 900;
                    line-height: 14px;
                }
            }
        }
        .adress {
            .text {
                text-align: left;
                line-height: 14px;
                font-size: 14px;
                font-weight: 700;
            }
        }
        .phone {
            .text-item {
                font-size: 14px;
                font-weight: 700;
                display: block;
            }
        }
    }
    .header-item.logo {
        .link-logo {
            display: inline-block;
            .logo-svg {
                width: 250px;
            }
        }
    }
    .header-item.callback {
        height: 50px;
        .callback-btn {
            height: 100%;
            width: 250px; // нужно будет изменять для меньших разрешений
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #29abe2;
            color: #29abe2;
            font-weight: 700;
            font-size: 15px;
            padding: 0 20px;
            transition: all .3s;
            &:hover {
                color: white;
                background: #29abe2;
                transition: all .3s;
                text-decoration: none;
            }
        }
    }
}

</style>