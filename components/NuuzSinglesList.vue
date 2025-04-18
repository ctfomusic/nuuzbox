<template>
    <div class="flex flex-col">
        <table class="table-auto text-left">
            <thead>
                <tr>
                    <th class="bg-gray-200">Date</th>
                    <th class="bg-gray-200">Artist</th>
                    <th class="bg-gray-200">Title</th>
                    <th class="bg-gray-200">Rating</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(video, index) in singles" :key="index">
                    <tr class="border-grey-200 border-b">
                        <td>{{ video.published.split(",")[0] }}</td>
                        <td class="font-black">{{ video.artist }}</td>
                        <td>{{ video.title }}</td>
                        <td>{{ video.rating }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const img = useImage();
const app = useAppConfig();
const { data: { singles } } = app
</script>