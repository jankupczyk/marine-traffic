<script lang="ts">
    import { t, locale } from "../../i18n/i18n";

    const locales = [
        { iso: "gb", lang: "English" },
        { iso: "pl", lang: "Polish" },
        { iso: "no", lang: "Norwegian" },
    ];
</script>

<nav class="flex items-center ml-auto">
    <label for="lang-select" class="grid place-content-center">
        <img
            src="https://flagicons.lipis.dev/flags/4x3/{$locale}.svg"
            alt={"gb"}
            class="w-6 mr-2"
        />
    </label>

    <select
        name="language-selector"
        id="lang-select"
        class="bg-transparent w-20"
        bind:value={$locale}
    >
        {#each locales as l}
            <option value={l.iso} class="p-4 text-blue-800">
                {$t(`lang.${l.iso}`)}
            </option>
        {/each}
    </select>
</nav>
