<template>
  <div class="enterprise-dropdown">
    <div class="dropdown-wrap">
      <a href="#" class="dropdown-wrap__content type2">
        <!-- <dollar-svg style="min-width: 24px" /> -->
        <NursesSvg class="nurses-svg" />
        <a>
          <span class="content--top">АНКЕТЫ СИДЕЛОК</span>
          <div class="content--bottom">В нашей наработанной базе около 3000+ кандидатов</div>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
//  import icon from '../../assets/adress.svg'
  import NursesSvg from '../../assets/svg/nurses.svg'

export default {
  components: { NursesSvg },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.enterprise-dropdown {
    padding-top: 10px;
    .dropdown-wrap {
        transition: color .3s;
        .dropdown-wrap__content {
            align-items: center;
            a {
                line-height: 20px;
                .content--top {
                    font-weight: 900;
                    color: #007bff;
                }
                .content--bottom {
                    font-size: 13px;
                    font-weight: 900;
                }
            }
            .nurses-svg {
                width: 40px;
                margin-right: 10px;
            }
        }
        &:hover {
            .content--top {
                color: white !important;
                transition: color .3s;
            }
            .content--bottom {
                color: black;
                transition: color .3s;
            }
        }
    }
}
</style>
