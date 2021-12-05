<script lang="ts">
    import type { Icon } from "../others/Icon";

    interface props {
        text: string,
        icon: Icon,
    }

    export let props: props;
</script>

<button
    class="bg-blue-600 hover:bg-blue-800 text-gray-100 p-1 radius-2 text-center"
    style="width: 30px;height: 30px;"
    title={props.text}
    on:click
>
    {@html props.icon}
</button>
