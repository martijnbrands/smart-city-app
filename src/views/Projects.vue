<template>
  <div>
    <v-toolbar app flat color="white">
          <v-spacer></v-spacer>
          <v-toolbar-title>Spoorzone</v-toolbar-title>
          <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-flex >
          <v-card class="mb-2" v-for="project in projects" :key="project.id">
            <v-img
              v-bind:src="project.picture"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{project.title}}</h3>
                <div>{{project.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat
              :to="{name: 'SingleProject', params: {
                id: project.id,
                title: project.title, 
                description: project.description
                }
                }">
              view Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Tramkade",
          description: "Ea enim qui culpa ad incididunt. Sint veniam laborum dolor incididunt dolor laboris ipsum magna duis quis. Esse minim cupidatat sint esse ipsum cupidatat commodo ex sit incididunt excepteur. Velit exercitation eiusmod eu amet excepteur laboris. Sit sint Lorem irure esse pariatur nisi eu officia do sunt mollit mollit culpa.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 2,
          title: "irure ut culpa nostrud do",
          description: "Nulla sint incididunt enim culpa occaecat. Duis incididunt duis eu sunt non elit pariatur elit irure aute dolor ea ut veniam. Laborum deserunt id consequat duis quis dolore velit pariatur anim ea sit. Deserunt consequat dolor do quis voluptate dolor. Ad ut ea sunt ea aliquip esse non ut et nostrud sunt non. Nulla dolore pariatur cupidatat sunt sint consectetur laboris consectetur.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 3,
          title: "deserunt aute culpa pariatur est",
          description: "Cupidatat laboris ad sit esse nulla. Lorem ad sunt esse commodo reprehenderit. Dolore et anim elit sit dolore adipisicing pariatur enim do anim in. Sunt eiusmod laboris non deserunt occaecat exercitation incididunt occaecat laboris. Nulla consectetur veniam ut minim dolore pariatur eiusmod nulla.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 4,
          title: "ipsum est consectetur non deserunt",
          description: "Ea laborum fugiat eu eiusmod est esse. Ad anim laborum Lorem consectetur velit laborum exercitation mollit mollit tempor eiusmod et esse labore. Ea sit velit non incididunt Lorem sunt. Amet veniam qui non dolor ea. Est incididunt ex ex nisi est quis aliquip velit eu. Ipsum exercitation duis labore labore nulla tempor aliquip est sunt.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 5,
          title: "ipsum culpa consequat dolor cupidatat",
          description: "Nulla culpa officia enim elit deserunt fugiat labore. Ut occaecat laboris irure aliquip est culpa id ea veniam. Aute eiusmod ea irure labore aliquip cillum cillum magna Lorem nulla deserunt.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 6,
          title: "culpa cillum ut ea et",
          description: "Consectetur fugiat pariatur commodo nostrud esse do excepteur qui quis. Proident sit dolor deserunt incididunt enim eu. Ipsum culpa sit adipisicing labore ullamco. Ad est quis aliqua non labore laboris irure et ipsum proident occaecat mollit. Laborum consectetur cillum enim elit irure nulla dolore. Ad Lorem labore culpa exercitation.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 7,
          title: "est magna non non qui",
          description: "Elit adipisicing Lorem magna ut proident veniam eiusmod nulla. Mollit fugiat commodo eu excepteur ullamco ullamco. Pariatur mollit aute nisi laboris aliqua veniam reprehenderit ipsum irure ipsum qui. Non sit commodo sint duis sunt incididunt irure excepteur proident officia ut proident. Veniam ea qui cupidatat voluptate amet officia. Officia laboris consectetur enim aliquip.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 8,
          title: "do excepteur eiusmod ea sunt",
          description: "Eu qui voluptate fugiat cillum nisi minim labore culpa aute reprehenderit fugiat minim reprehenderit officia. Duis do et labore aliqua aute. Dolore qui non do ullamco elit aute Lorem duis velit labore consectetur sit.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 9,
          title: "sunt irure culpa nulla pariatur",
          description: "Consectetur dolor nisi amet est consequat proident aliqua ex ad aute commodo. Ullamco sunt velit fugiat adipisicing occaecat pariatur occaecat. Minim laboris eiusmod voluptate laborum Lorem adipisicing id adipisicing ad. Dolore enim reprehenderit aliqua ullamco culpa ullamco voluptate. Do commodo quis id adipisicing exercitation proident commodo aliqua non magna adipisicing eu. Ad culpa qui elit ut magna veniam nulla enim nulla elit magna. Pariatur nulla cupidatat laboris minim dolore culpa fugiat ullamco qui occaecat magna laborum culpa.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 10,
          title: "aute esse ex nisi nostrud",
          description: "Minim cupidatat nostrud culpa proident aute commodo commodo laborum ex. Minim magna enim ipsum labore non adipisicing non ea cupidatat. Anim sunt occaecat id dolor commodo. Laborum officia exercitation laborum veniam enim dolor do laboris aliquip elit fugiat ex veniam ex. Esse velit officia do quis.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 11,
          title: "ut ad veniam enim fugiat",
          description: "Sunt deserunt excepteur non amet pariatur est et sit quis nisi cillum. Qui dolore do aliqua ut. Reprehenderit pariatur sunt nostrud dolor sit mollit dolore.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 12,
          title: "sit dolore et in dolore",
          description: "Laborum aute dolore tempor aute exercitation irure sint duis in dolor tempor. Id aliqua ullamco duis ad dolore ut Lorem enim. Amet sint fugiat eu enim nulla eiusmod aliquip. Ut quis adipisicing consectetur magna fugiat est proident mollit.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 13,
          title: "in eu non eiusmod amet",
          description: "Sit ad esse Lorem aliqua dolore laborum amet nulla occaecat nulla ex ullamco est occaecat. Excepteur in labore commodo dolor excepteur dolor sint laborum labore nostrud fugiat eu. Consectetur nulla adipisicing laboris adipisicing eiusmod duis magna quis esse sint culpa velit cupidatat. Amet cupidatat Lorem pariatur aute et do dolore eu magna pariatur velit nulla commodo minim. In dolor irure proident consectetur elit voluptate magna ad. Eu cupidatat ex cupidatat excepteur veniam ut id sint excepteur in.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 14,
          title: "laboris elit elit labore consectetur",
          description: "Magna laboris voluptate nisi quis aliquip ullamco veniam ut enim nulla. Amet eu ut ut mollit pariatur veniam. Nisi esse aliquip sint nostrud sit eu non ut nulla tempor amet excepteur id. Ullamco dolore dolor duis ipsum excepteur ut. Ullamco voluptate magna consectetur voluptate exercitation irure sit in enim occaecat culpa aliqua elit ex. Elit in ad deserunt aliqua commodo sint cupidatat aute id exercitation. Officia eiusmod cupidatat sint ullamco esse amet laborum excepteur do amet enim labore.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 15,
          title: "anim consectetur sint minim fugiat",
          description: "Elit magna sunt velit in. Commodo et deserunt adipisicing deserunt anim velit do irure. Est officia nostrud et reprehenderit eu dolore consequat elit nulla. Velit nulla cillum dolore velit.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 16,
          title: "reprehenderit quis deserunt ad sit",
          description: "Veniam eiusmod duis eiusmod proident amet adipisicing sunt sunt sit in magna. Aute velit elit labore veniam pariatur ut aute aute mollit. Ea anim non pariatur non consequat tempor sunt.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 17,
          title: "officia mollit commodo excepteur veniam",
          description: "Mollit incididunt ex dolore consectetur irure quis consectetur labore. Officia velit adipisicing pariatur incididunt esse do qui voluptate magna aute id ipsum. Dolore proident consequat reprehenderit fugiat officia proident. Tempor officia adipisicing velit cupidatat reprehenderit enim. Labore occaecat consectetur culpa nostrud et sunt adipisicing voluptate duis.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 18,
          title: "occaecat elit proident quis ex",
          description: "Dolore anim non irure velit reprehenderit duis officia officia est nisi. Mollit officia pariatur proident quis ipsum nisi deserunt cillum labore aute cillum ullamco. Esse est non laborum qui quis. Esse sint est dolore magna Lorem laboris aliqua voluptate. Duis officia incididunt irure sint do.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 19,
          title: "sint in occaecat ad qui",
          description: "Qui cillum ea aute et pariatur in eiusmod irure ea duis officia. Proident ullamco consectetur amet id consequat amet labore. Aliquip laborum laborum labore adipisicing aliquip laboris ex ipsum pariatur minim culpa fugiat tempor sint. Mollit nisi consectetur irure cillum cillum magna aliquip exercitation incididunt ut. Esse eu consectetur ullamco ex sint in nisi eu elit consectetur magna nisi officia id.\r\n",
          picture: "http://placehold.it/300x300"
        },
        {
          id: 20,
          title: "aute elit consequat tempor nulla",
          description: "In cillum pariatur sunt dolore anim. Eu aliqua enim Lorem nulla do nulla et amet aliqua consequat Lorem. Pariatur labore veniam est et occaecat nulla esse enim. Elit veniam consectetur excepteur proident anim magna qui non est. Dolor id amet id occaecat fugiat velit consequat tempor elit officia pariatur pariatur quis. Elit elit exercitation deserunt incididunt adipisicing laborum ipsum consequat velit sint laboris velit elit. Eiusmod aute sint reprehenderit exercitation aute exercitation magna anim sit consectetur ea cupidatat veniam.\r\n",
          picture: "http://placehold.it/300x300"
        } 
      ]   
    };
  },
};
</script>

<style lang="sass">
</style>