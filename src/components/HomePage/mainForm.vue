<template>
  <div class="slider-item-right">
    <div class="main-form">
      <div class="main-form-title">
        <h3>Подбор сиделки</h3>
        <p>в день обращения</p>
      </div>
      <label for="name" class="main-form-label">
        <p>Ваше имя:</p>
        <input
          type="text"
          class="input-name"
          id="name"
          name="name"
          placeholder="Александр Савочкин"
          autocomplete="off"
          v-model="$v.nameValue.$model"
          @input="this.nameHandler"
        />
        <!-- <div class="error" v-if="!$v.nameValue.required">Field is required</div> -->
        <div class="error" v-if="!$v.nameValue.minLength">Имя должно быть больше чем {{$v.nameValue.$params.minLength.min}} символа.</div>
        <div class="error" v-if="!$v.nameValue.maxLength">Имя не должно быть больше {{$v.nameValue.$params.maxLength.max}} символов.</div>
      </label>
      <label for="phone" class="main-form-label">
        <p>Контактный телефон:</p>
        <masked-input 
            class="input-phone" 
            id="phone"
            name="phone"
            mask="\+\7 (111) 111-11-11" 
            placeholder="+7 (___) ___-__-__" 
            autocomplete="off"
            v-model="$v.phoneValue.$model"
            @input="phoneHandler()"
        />
        <div class="error">{{ phoneError }}</div>
      </label>
      <label for="message" class="main-form-label">
        <p>Пожелания:</p>
        <textarea
          class="textarea-message"
          name="message"
          id="message"
          placeholder="Какие-то нюансы"
          autocomplete="off"
        ></textarea>
      </label>
      <div class="main-form-submit">
        <button :class="`${nameIsValid && phoneIsValid ? 'is-valid' : 'no-valid'}`" @click="submitForm()">Заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { validationMixin } from 'vuelidate'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    components: {
        MaskedInput
    },
    mixins: [validationMixin],
    validations: { 
        nameValue: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(30)
        },
        phoneValue: {
            required,
            minLength: minLength(5)
        }
    },
    data() {
        return {
            formIsValid: false,
            nameIsValid: false,
            phoneIsValid: false,
            nameValue: '',

            phoneError: ''
        }
    },
    methods: {
        nameHandler() {
            // console.log('min', this.$v.nameValue.minLength)
            // console.log('max', this.$v.nameValue.maxLength)
            // console.log(this.$v.nameValue.$model.replace(/[^a-z\u0400-\u04FF]+/g, ''))
            if(this.$v.nameValue.minLength && this.$v.nameValue.maxLength && this.$v.nameValue.required) {
                this.nameIsValid = true
            } else {
                this.nameIsValid = false
            }
            console.log('name is valid', this.nameIsValid)
        },
        phoneHandler() {
            console.log(this.phoneValue.replace(/\D+/g, ''));
            if(this.phoneValue.replace(/\D+/g, '').length < 11) {
                this.phoneIsValid = false
                this.phoneError = 'Введите корректный номер'
            } else {
                this.phoneIsValid = true
                this.phoneError = ''
            }
        },
        submitForm() {
            // if(this.nameIsValid && this.phoneIsValid) {

            // }
        }
    }
}
</script>