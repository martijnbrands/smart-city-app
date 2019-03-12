<template>
    <div>
        <v-toolbar app flat color="white">
            <v-toolbar-title>Kaart</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="900" id="gmap_canvas" src="https://maps.google.com/maps?q=den%20bosch&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    </div>
</template>
