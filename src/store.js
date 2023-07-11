import { reactive } from "vue";

export const store = reactive({
    baseUrl: "http://localhost:8000",
    selectedTechnology: "all",
    //baseUrl: "http://127.0.0.1:8000"

})

export const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
