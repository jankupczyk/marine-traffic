<div class="absolute bottom-0 left-0 right-0 h-20 w-full overflow-x-hidden">
    <div class="wave bottom-0 h-full opacity-60" />
    <div class="wave bottom-0 h-full opacity-70" />
    <div class="wave bottom-0 h-full opacity-70" />
</div>

<style>
    .wave {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%231e40af'/%3E%3C/svg%3E");
        position: absolute;
        width: 200%;
        animation: wave 45s linear infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
        animation: wave 39s linear reverse infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(3) {
        animation: wave 30s linear infinite;
        transform: translate3d(0, 0, 0);
    }

    @keyframes wave {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-25%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
