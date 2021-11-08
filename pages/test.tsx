import { LinkedButton } from "./components/LinkedButton";
import { useState } from "react";

const Test = ({ setStoppingTime }) => {
  return (
    <>
      <h2>Die Küchenuhr</h2>
      <p>
        <em>Wolfgang Borchert</em>
      </p>
      <p>
        Sie sahen ihn schon von weitem auf sich zukommen, denn er fiel auf. Er
        hatte ein ganz altes Gesicht, aber wie er ging, daran sah man, daß er
        erst zwanzig war. Er setzte sich mit seinem alten Gesicht zu ihnen auf
        die Bank. Und dann zeigte er ihnen, war er in der Hand trug. Das war
        unsere Küchenuhr, sagte er und sah sie alle der Reihe nach an, die auf
        der Bank in der Sonne saßen. Ja, ich habe sie noch gefunden. Sie ist
        übriggeblieben. Er hielt eine runde tellerweiße Küchenuhr vor sich hin
        und tupfte mit dem Finger die blaugemalten Zahlen ab. Sie hatte weiter
        keinen Wert, meinte er entschuldigend, das weiß ich auch. Und sie ist
        auch nicht so besonders schön. Sie ist nur wie ein Teller, so mit weißem
        Lack. Aber die blauen Zahlen sehen doch ganz hübsch aus, finde ich. Die
        Zeiger sind natürlich nur aus Blech. Und nun gehen sie auch nicht mehr.
        Nein. Innerlich ist sie kaputt, das steht fest. Aber sie sieht noch aus
        wie immer. Auch wenn sie jetzt nicht mehr geht. Er machte mit der
        Fingerspitze einen vorsichtigen Kreis auf dem Rand der Telleruhr
        entlang. Und er sagte leise: Und sie ist übriggeblieben. Die auf der
        Bank in der Sonne saßen, sahen ihn nicht an. Einer sah auf seine Schuhe
        und die Frau in ihren Kinderwagen. Dann sagte jemand: Sie haben wohl
        alles verloren? Ja, ja, sagte er freudig, denken Sie, aber auch alles!
        Nur sie hier, sie ist übrig. Und er hob die Uhr wieder hoch, als ob die
        anderen sie noch nicht kannten. Aber sie geht doch nicht mehr, sagte die
        Frau. Nein, nein, das nicht. Kaputt ist sie, das weiß ich wohl. Aber
        sonst is sie doch noch ganz wie immer: weiß und blau. Und wieder zeigte
        er ihnen seine Uhr. Und was das Schönste ist, fuhr er aufgeregt fort,
        das habe ich Ihnen ja noch überhaupt nicht erzählt. Das Schönste kommt
        nämlich noch: Denken Sie mal, sie ist um halb drei stehengeblieben.
        Ausgerechnet um halb drei, denken sie mal! Dann wurde Ihr Haus sicher um
        halb drei getroffen, sagte der Mann und schob wichtig die Unterlippe
        vor, Das habe ich schon oft gehört. Wenn die Bombe runtergeht, bleiben
        die Uhren stehen. Das kommt von dem Druck. Er sah seine Uhr an und
        schüttelte überlegen den Kopf. Nein, lieber Herr, nein, da irren Sie
        sich. Das hat mit den Bomben nichts zu tun. Sie müssen nicht immer von
        den Bomben reden. Nein. Um halb drei war ganz etwas anderes, das wissen
        Sie nur nicht. Das ist nämlich der Witz, daß sie gerade um halb drei
        stehengeblieben ist. Und nicht um viertel nach vier oder um sieben. Um
        halb drei kam ich nämlich immer nach Hause. Nachts, meine ich. Fast
        immer um halb drei. Das ist ja gerade der Witz Er sah die anderen an,
        aber die hatten ihre Augen von ihm weggenommen. Er fand sie nicht. Da
        nichte er seiner Uhr zu: Dann hatte ich natürlich Hunger, nicht wahr?
        Und ich ging immer gleich in die Küche Da war es dann immer fast halb
        drei. Und dann, dann kam nämlich meine Mutter. Ich konnte noch so leise
        die Tür aufmachen, sie hat mich immer gehört. Und wenn ich in der
        dunklen Küche etwas zu essen suchte, ging plötzlich das Licht an. Dann
        stand sie da in ihrer Wolljacke und mit einem roten Schal um. Und
        barfuß. Immer barfuß. Und dabei war unsere Küche gekachelt. Und sie
        machte ihre Augen ganz klein, weil ihr das Licht so hell war. Denn sie
        hatte ja schon geschlafen. Es war ja Nacht. So spät wieder, sagte sie
        dann. Mehr sagte sie nie. Nur: So spät wieder. Und dann machte sie mir
        das Abendbrot warm und sah zu, wie ich aß. Dabei scheuerte sie immer die
        Füße aneinander, weil die Kacheln so kalt waren. Schuhe zog sie nachts
        nie an. Und sie saß so lange bei mir, bis ich satt war. Und dann hörte
        ich sie noch die Teller wegsetzen, wenn ich in meinem Zimmer schon das
        Licht ausgemacht hatte. Jede Nacht war es so. Und meistens immer um halb
        drei. Das war ganz selbstverständlich, fand ich, daß sie mir nachts um
        halb drei in der Küche das Essen machte. Ich fand das ganz
        selbstverständlich. Sie tat das ja immer. Und sie hat nie mehr gesagt
        als: So spät wieder. Aber das sagte sie jedesmal. Und ich dachte, das
        könnte nie aufhören. Es war mir so selbstverständlich. Das alles war
        doch immer so gewesen. Einen Atemzug lang war es ganz still auf der
        Bank. Dann sagte er leise: Und jetzt? Er sah die anderen an. Aber er
        fand sie nicht. Da sagte er der Uhr leise ins weißblaue runde Gesicht:
        Jetzt, jetzt weiß ich, daß es das Paradies war. Auf der Bank war es ganz
        still. Dann fragte die Frau: Und ihre Familie? Er lächelte sie verlegen
        an: Ach, Sie meinen meine Eltern? Ja, die sind auch mit weg. Alles ist
        weg. Alles, stellen Sie sich vor. Alles weg. Er lächelte verlegen von
        einem zum anderen. Aber sie sahen ihn nicht an. Da hob er wieder die Uhr
        hoch und er lachte. Er lachte: Nur sie hier. Sie ist übrig. Und das
        Schönste ist ja, daß sie ausgerechnet um halb drei stehengeblieben ist.
        Ausgerechnet um halb drei. Dann sagte er nichts mehr. Aber er hatte ein
        ganz altes Gesicht. Und der Mann, der neben ihm saß, sah auf seine
        Schuhe. Aber er sah seine Schuhe nicht. Er dachte immerzu an das Wort
        Paradies.
      </p>
      <LinkedButton
        id={"stop"}
        buttonUrl={"questions"}
        content={"Zeit stoppen"}
        icon={null}
        onClick={() => {
          setStoppingTime(Date.now());
        }}
      />
    </>
  );
};

export default Test;
