package com.hipsterheaven.music;

import com.hipsterheaven.music.resources.Album;
import com.hipsterheaven.music.resources.Comment;
import com.hipsterheaven.music.resources.Song;
import com.hipsterheaven.music.services.AlbumService;
import com.hipsterheaven.music.services.SongService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    AlbumService albumService;
    SongService songService;

    public Populator(AlbumService albumService, SongService songService) {
        this.albumService = albumService;
        this.songService = songService;
    }

    @Override
    public void run(String... args) throws Exception {
        Album badBrains = new Album("Bad Brains", "Bad Brains", "ROIR",
                "The groundbreaking first album from the hardcore punk/reggae Washington, D.C. based band Bad Brains. ", "https://i.ibb.co/vPvDdX6/badbrains.jpg");
        albumService.save(badBrains);
        Song sailinOn = new Song("Sailin' On", "1:55", 10, badBrains, "https://www.youtube.com/embed/gylw5PZKN1U");
        songService.save(sailinOn);
        Song bigTakeOver = new Song("Big Take Over", "2:57", 10, badBrains, "https://www.youtube.com/embed/5NAPYIMMbWQ");
        songService.save(bigTakeOver);

        Album reckoning = new Album("Reckoning", "R.E.M.", "I.R.S. Records",
                "The second album from Athens, GA based R.E.M.", "https://i.ibb.co/R7FhVCw/reckoning.jpg");
        albumService.save(reckoning);
        Song centralRain = new Song("So. Central Rain (I'm Sorry)", "3:15", 10, reckoning, "https://www.youtube.com/embed/msWi0c4tHV8");
        songService.save(centralRain);

        Album houdini = new Album("Houdini", "Melvins", "Atlantic",
                "The first major-label release from underground proto-grunge legends Melvins. Co-produced by friend Kurt Cobain, who also played guitar on the track 'Sky Pup.'", "https://i.ibb.co/p32HM25/houdini.jpg");
        houdini.addComment(new Comment("Dale Crover is a BEAST", "Drumfan22"));
        albumService.save(houdini);
        Song nightGoat = new Song("Night Goat", "4:41", 9, houdini, "https://www.youtube.com/embed/BzTa8LIY_CY");
        songService.save(nightGoat);

        Album readingWriting = new Album("Reading, Writing and Arithmetic", "The Sundays", "Rough Trade",
                "The debut album by the English alternative rock/jangle pop band. The album's title is a reference to the band's hometown, Reading, Berkshire.", "https://i.ibb.co/fGwwYjv/readingwriting.jpg");
        albumService.save(readingWriting);
        Song skinBones = new Song("Skin and Bones", "4:19", 8, readingWriting, "https://www.youtube.com/embed/rxLVoHm9HVA");
        songService.save(skinBones);
        Song onlyOne = new Song("You're Not the Only One I Know", "3:51", 10, readingWriting, "https://www.youtube.com/embed/UR8Pha_MZv8");
        onlyOne.addComment(new Comment("This song is just so dreamy...", "Audrey Horne"));
        songService.save(onlyOne);

        Album electricLady = new Album("The Electric Lady", "Janelle Monáe", "Atlantic",
                "Monáe's second full-length studio album. It makes up installments four and five of her seven-part Metropolis concept series.", "https://i.ibb.co/HgY1xfL/electriclady.jpg");
        albumService.save(electricLady);
        Song queen = new Song("Q.U.E.E.N.", "5:11", 10, electricLady, "https://www.youtube.com/embed/tEddixS-UoU");
        songService.save(queen);
        Song titleSong = new Song("The Electric Lady", "5:09", 11, electricLady, "https://www.youtube.com/embed/LPFgBCUBMYk");
        songService.save(titleSong);
        Song primetime = new Song("Primetime", "4:40", 7, electricLady, "https://www.youtube.com/embed/Oxls2xX0Clg");
        songService.save(primetime);

        Album enema = new Album("Enema of the State", "blink-182", "MCA Records",
                "Who can forget blink-182's 1999 album 'Enema of the State,' with classics like 'What's My Age Again?', 'All the Small Things', and 'Adam's Song'?", "https://i.ibb.co/ZHLS0TB/blinkenema.jpg");
        albumService.save(enema);
        Song aliensExist = new Song("Aliens Exist", "3:13", 9, enema, "https://www.youtube.com/embed/MH8aXH9XMvA");
        songService.save(aliensExist);
        Song dysGary = new Song("Dysentery Gary", "2:45", 9, enema, "https://www.youtube.com/embed/BQ45bHZd8Tw");
        songService.save(dysGary);
    }
}
