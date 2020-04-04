<template>
  <div class="enterprise-dropdown">
    <div class="dropdown-wrap">
      <a :href="item.link" class="dropdown-wrap__content type1" v-for="(item, index) in services" :key="index">
        <!-- <dollar-svg /> -->
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
//  import icon from '../../assets/adress.svg'

export default {
  components: {},
  data() {
    return {
        services: [
            {
                name: 'Сиделка с проживанием',
                link: ''
            },
            {
                name: 'Сиделка в больницу',
                link: ''
            },
            {
                name: 'Сиделка для лежачего больного',
                link: ''
            },
            {
                name: 'Приходящая сиделка',
                link: ''
            },
            {
                name: 'Суточная сиделка',
                link: ''
            },
            {
                name: 'Ночная сиделка',
                link: ''
            },
            {
                name: 'Сиделка на дом',
                link: ''
            },
            {
                name: 'Сиделка для пожилого человека',
                link: ''
            },
            {
                name: 'Сиделка для больных после инсульта',
                link: ''
            }
        ]
    };
  }
};
</script>

<style lang="scss" scoped>
.enterprise-dropdown {
    .dropdown-wrap {
        &__content {
            span {
                font-size: 17px;
                font-weight: 700;
            }
            &:hover {
                span {
                    color: white;
                }
            }
        }
    }
}
</style>