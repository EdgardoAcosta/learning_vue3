import { createApp } from "vue";

import App from "./App.vue";
import FrindContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);

app.component("friend-contact", FrindContact);
app.component("new-friend", NewFriend);

app.mount("#app");
