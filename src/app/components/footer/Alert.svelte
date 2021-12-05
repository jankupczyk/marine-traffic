<script>
    export let text;
</script>

<div class="z-9999 alert-toast fixed bottom-0 right-0 mx-2 md:mx-8 mb-14 md:mb-8 md:w-auto">
    <input type="checkbox" class="hidden" id="footertoast" />

    <label
        class="close cursor-pointer flex items-start justify-between w-auto p-3 bg-blue-600 h-auto rounded shadow-lg text-white"
        title="close"
        for="footertoast"
    >
        {text}
        <svg class="h-6 w-6 fill-current text-white ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
    </label>
</div>

<style>
    /* Open */
    .alert-toast {
        -webkit-animation: slide-in-right 0.9s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-right 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    /* Close */
    .alert-toast input:checked ~ * {
        -webkit-animation: fade-out-right 0.75s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: fade-out-right 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        display: none;
    }

    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
    @-webkit-keyframes fade-out-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
        }
    }
    @keyframes fade-out-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
        }
    }
</style>
