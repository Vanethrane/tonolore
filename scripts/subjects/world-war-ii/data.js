/*
 * World War II subject data — alliances, leaders, and the war's turning theaters.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "documented", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / alliances ---------- */

entity(
    "world-war-ii",
    "World War II",
    "topic",
    "Global war of 1939–45 that remade states, borders, and international law.",
    "World War II is the public-domain historical record of the Axis bid for empire and the Allied response: from the invasion of Poland and Pearl Harbor through Stalingrad, D-Day, the Holocaust, and the bombs on Japan, to the United Nations that followed."
);

entity(
    "allies",
    "Allies",
    "organization",
    "Coalition led in the end by Britain, the United States, and the Soviet Union.",
    "The Allies grew from the countries that resisted German, Italian, and Japanese expansion into the Grand Alliance. Their wartime conferences shaped occupation and the UN."
);

entity(
    "axis",
    "Axis",
    "organization",
    "Germany, Italy, Japan, and their dependent partners.",
    "The Axis, named from the Rome–Berlin axis and later the Tripartite Pact, was the aggressive alliance the Allies destroyed. Its racial and imperial programs drove both the European and Pacific wars."
);

entity(
    "nazi-germany",
    "Nazi Germany",
    "organization",
    "Hitler's state, engine of the European war and the Holocaust.",
    "Nazi Germany remilitarized, annexed, and then invaded its neighbors. Its racial state murdered Europe's Jews and millions of others while fighting a two-front war it could not sustain."
);

entity(
    "imperial-japan",
    "Imperial Japan",
    "organization",
    "Empire that opened the Asia–Pacific war and attacked Pearl Harbor.",
    "Imperial Japan had already been at war in China when it struck the United States and European colonies in 1941. The Greater East Asia Co-Prosperity Sphere ended in surrender after Hiroshima and Nagasaki."
);

/* ---------- Leaders ---------- */

entity(
    "adolf-hitler",
    "Adolf Hitler",
    "person",
    "Dictator of Nazi Germany who launched the European war.",
    "Adolf Hitler headed the Nazi Party and the German state from 1933. He ordered the invasions that began the European war and the genocide that is the Holocaust, and he died in Berlin in 1945."
);

entity(
    "winston-churchill",
    "Winston Churchill",
    "person",
    "British prime minister of the defiance years and the Grand Alliance.",
    "Winston Churchill took office in May 1940, refused a compromise peace during the Blitz, and held Britain in the war until American and Soviet weight could turn it."
);

entity(
    "franklin-d-roosevelt",
    "Franklin D. Roosevelt",
    "person",
    "U.S. president who moved from Lend-Lease to full belligerence.",
    "Franklin D. Roosevelt armed Britain and the USSR before Pearl Harbor, then led the United States through the coalition conferences until his death in April 1945, weeks before VE Day."
);

entity(
    "joseph-stalin",
    "Joseph Stalin",
    "person",
    "Soviet dictator whose armies broke the Wehrmacht in the east.",
    "Joseph Stalin absorbed the 1941 invasion, relocated industry, and drove the Red Army to Berlin. His later occupation of Eastern Europe was the other face of that victory."
);

entity(
    "benito-mussolini",
    "Benito Mussolini",
    "person",
    "Fascist leader of Italy, first Axis partner, later a German client.",
    "Benito Mussolini entered the war in 1940, lost in Africa and Greece, and was overthrown in 1943. Germany restored him as a puppet until 1945."
);

entity(
    "dwight-d-eisenhower",
    "Dwight D. Eisenhower",
    "person",
    "Supreme Allied commander for the invasion of northwest Europe.",
    "Dwight D. Eisenhower ran the Mediterranean then Overlord. D-Day and the campaign into Germany were his coalition command problem as much as a U.S. army problem."
);

entity(
    "hideki-tojo",
    "Hideki Tojo",
    "person",
    "Japanese prime minister at the time of Pearl Harbor.",
    "Hideki Tojo headed the government that chose the southern advance and the attack on the United States. He fell in 1944 as the Pacific war turned; he was later executed as a war criminal."
);

/* ---------- Events / places ---------- */

entity(
    "invasion-of-poland",
    "Invasion of Poland",
    "event",
    "1 September 1939 — the start of the European war.",
    "Germany's invasion of Poland, joined by the Soviet Union from the east, ended the interwar pause. Britain and France declared war on Germany two days later."
);

entity(
    "the-blitz",
    "The Blitz",
    "event",
    "1940–41 bombing of British cities after the Battle of Britain.",
    "The Blitz was the night campaign against London and other cities when invasion had failed. It did not break British resistance; it fixed Churchill's Britain in Allied memory."
);

entity(
    "battle-of-britain",
    "Battle of Britain",
    "event",
    "1940 air battle that blocked a German invasion of the UK.",
    "The Battle of Britain was Fighter Command's defense of the island. Failure to destroy the RAF canceled Operation Sea Lion and kept a western base for later Allied return."
);

entity(
    "operation-barbarossa",
    "Operation Barbarossa",
    "event",
    "22 June 1941 — German invasion of the Soviet Union.",
    "Barbarossa opened the eastern war of annihilation. Early encirclements did not take Moscow; the front became the grave of the Wehrmacht."
);

entity(
    "pearl-harbor",
    "Pearl Harbor",
    "event",
    "7 December 1941 attack that brought the United States into the war.",
    "The Japanese strike on the Pacific Fleet at Pearl Harbor failed to destroy U.S. carriers and instead unified American entry into both Pacific and European wars."
);

entity(
    "battle-of-stalingrad",
    "Battle of Stalingrad",
    "event",
    "1942–43 urban battle that ended Germany's eastern advance.",
    "Stalingrad destroyed the German Sixth Army and marked the turn in Europe. After the surrender of January 1943, the strategic initiative in the east passed to the Red Army."
);

entity(
    "d-day",
    "D-Day",
    "event",
    "6 June 1944 Allied landings in Normandy.",
    "D-Day — Operation Overlord — opened the long-promised western front. Eisenhower's coalition landed on five beaches and began the liberation of France."
);

entity(
    "holocaust",
    "Holocaust",
    "event",
    "Nazi genocide of Europe's Jews and the murder of millions of others.",
    "The Holocaust is the systematic murder of six million Jews, with millions of other victims of Nazi racial and political killing. Camps, ghettos, and shooting units were the machinery; it is central, not incidental, to the Nazi war."
);

entity(
    "auschwitz",
    "Auschwitz",
    "place",
    "Largest death-and-labor camp complex of the Holocaust.",
    "Auschwitz-Birkenau in occupied Poland was both concentration camp and killing center. It stands as the most documented site of the genocide."
);

entity(
    "hiroshima",
    "Hiroshima",
    "event",
    "6 August 1945 — first combat use of an atomic bomb.",
    "The United States destroyed Hiroshima with a uranium bomb. Together with Nagasaki and the Soviet invasion of Manchuria, it preceded Japan's surrender."
);

entity(
    "nagasaki",
    "Nagasaki",
    "event",
    "9 August 1945 — second atomic bombing of Japan.",
    "Nagasaki was hit three days after Hiroshima. The two bombings remain the only combat uses of nuclear weapons."
);

entity(
    "yalta-conference",
    "Yalta Conference",
    "event",
    "February 1945 meeting of Roosevelt, Churchill, and Stalin.",
    "Yalta settled occupation zones in Germany, Polish borders in outline, and Soviet entry against Japan — bargains that framed the early Cold War as well as the UN founding votes."
);

entity(
    "united-nations",
    "United Nations",
    "organization",
    "Successor security organization born from the wartime alliance.",
    "The United Nations grew from the 1942 Declaration by United Nations and the 1945 San Francisco Conference. It was designed to hold the wartime coalition in a permanent security council."
);

entity(
    "manhattan-project",
    "Manhattan Project",
    "organization",
    "Allied program that built the bombs used on Japan.",
    "The Manhattan Project was the U.S.-led industrial and scientific effort that produced the first nuclear weapons, used at Hiroshima and Nagasaki in August 1945."
);

entity(
    "atlantic-charter",
    "Atlantic Charter",
    "work",
    "1941 Roosevelt–Churchill statement of war aims.",
    "The Atlantic Charter set self-determination, free trade, and a postwar security system as Allied language — a document the later UN claimed as ancestry."
);

entity(
    "dunkirk-evacuation",
    "Dunkirk evacuation",
    "event",
    "1940 lift of the British Expeditionary Force from France.",
    "Dunkirk saved most of the BEF after the fall of France. It was a defeat that left Britain able to fight on, not a victory, but it shaped the island's next year."
);

entity(
    "ve-day",
    "VE Day",
    "event",
    "8 May 1945 — German surrender in the west.",
    "Victory in Europe Day marked the end of the war against Nazi Germany after the Berlin collapse and the successive surrenders of May 1945."
);

entity(
    "battle-of-midway",
    "Battle of Midway",
    "event",
    "June 1942 carrier battle that reversed the Pacific initiative.",
    "At Midway, the U.S. Navy sank four Japanese fleet carriers. The battle did not end the Pacific war, but it ended Japan's run of offensive surprise."
);

/* ---------- Relationships ---------- */

rel("axis", "world-war-ii", "part_of", "The Axis is the aggressive alliance of the Second World War.", 0.98, 0.96);
rel("allies", "world-war-ii", "part_of", "The Allies are the coalition that defeated the Axis.", 0.98, 0.96);
rel("allies", "axis", "opposed_by", "The Allies fought the Axis to unconditional surrender.", 0.99, 0.97);
rel("nazi-germany", "axis", "member_of", "Nazi Germany was the European core of the Axis.", 0.98, 0.96);
rel("imperial-japan", "axis", "member_of", "Imperial Japan was the Pacific core of the Axis.", 0.97, 0.95);
rel("adolf-hitler", "nazi-germany", "leads", "Hitler dictated Nazi Germany.", 0.99, 0.98);
rel("benito-mussolini", "axis", "member_of", "Mussolini's Italy was the original Axis partner.", 0.95, 0.92);
rel("hideki-tojo", "imperial-japan", "leads", "Tojo headed Japan when it attacked Pearl Harbor.", 0.96, 0.93);

rel("winston-churchill", "allies", "leads", "Churchill was Britain's wartime leader in the Grand Alliance.", 0.97, 0.95);
rel("franklin-d-roosevelt", "allies", "leads", "Roosevelt led the United States into and through the Alliance.", 0.97, 0.95);
rel("joseph-stalin", "allies", "leads", "Stalin's Soviet Union was the eastern pillar of the Alliance.", 0.96, 0.94);
rel("dwight-d-eisenhower", "allies", "member_of", "Eisenhower was supreme Allied commander in the west.", 0.96, 0.93);

rel("invasion-of-poland", "nazi-germany", "caused", "Germany's invasion of Poland opened the European war.", 0.98, 0.96);
rel("invasion-of-poland", "world-war-ii", "preceded", "The Polish campaign is the conventional start of the world war in Europe.", 0.97, 0.94);
rel("dunkirk-evacuation", "winston-churchill", "involved", "Dunkirk was the first crisis of Churchill's premiership.", 0.94, 0.9);
rel("battle-of-britain", "the-blitz", "preceded", "The daylight Battle of Britain gave way to the Blitz.", 0.95, 0.92);
rel("the-blitz", "winston-churchill", "involved", "Churchill's government held through the Blitz.", 0.96, 0.93);

rel("operation-barbarossa", "adolf-hitler", "caused", "Hitler ordered the invasion of the Soviet Union.", 0.98, 0.96);
rel("operation-barbarossa", "joseph-stalin", "involved", "Stalin's state absorbed and then reversed Barbarossa.", 0.96, 0.93);
rel("battle-of-stalingrad", "operation-barbarossa", "followed", "Stalingrad was the later turning point of the war Barbarossa began.", 0.95, 0.91);
rel("battle-of-stalingrad", "nazi-germany", "opposed_by", "The Sixth Army's destruction at Stalingrad broke Germany's eastern offensive.", 0.96, 0.93);

rel("pearl-harbor", "imperial-japan", "caused", "Japan planned and executed the attack on Pearl Harbor.", 0.98, 0.96);
rel("pearl-harbor", "franklin-d-roosevelt", "involved", "Pearl Harbor brought Roosevelt's United States fully into the war.", 0.97, 0.94);
rel("battle-of-midway", "pearl-harbor", "followed", "Midway, six months later, reversed the Pacific carrier war Pearl Harbor opened.", 0.94, 0.9);

rel("holocaust", "nazi-germany", "caused", "The Nazi state organized the Holocaust.", 0.99, 0.98);
rel("holocaust", "adolf-hitler", "caused", "Hitler's regime conceived and ordered the genocide.", 0.98, 0.96);
rel("auschwitz", "holocaust", "part_of", "Auschwitz was a central killing and labor complex of the Holocaust.", 0.98, 0.96);

rel("d-day", "dwight-d-eisenhower", "involved", "Eisenhower commanded the Overlord landings.", 0.97, 0.95);
rel("d-day", "allies", "involved", "D-Day was a British, American, and Canadian coalition landing.", 0.97, 0.94);
rel("ve-day", "d-day", "followed", "VE Day closed the European war Overlord had reopened in the west.", 0.93, 0.89);

rel("manhattan-project", "hiroshima", "produced", "The Manhattan Project built the bomb used on Hiroshima.", 0.97, 0.95);
rel("manhattan-project", "nagasaki", "produced", "The Manhattan Project built the bomb used on Nagasaki.", 0.96, 0.93);
rel("hiroshima", "imperial-japan", "involved", "Hiroshima was the first atomic blow against Japan.", 0.97, 0.94);
rel("nagasaki", "hiroshima", "followed", "Nagasaki was bombed three days after Hiroshima.", 0.96, 0.93);

rel("atlantic-charter", "winston-churchill", "produced", "Churchill and Roosevelt issued the Atlantic Charter in 1941.", 0.96, 0.93);
rel("atlantic-charter", "franklin-d-roosevelt", "produced", "Roosevelt and Churchill issued the Atlantic Charter in 1941.", 0.96, 0.93);
rel("atlantic-charter", "united-nations", "inspired", "The Charter's language fed the later United Nations.", 0.94, 0.9);
rel("yalta-conference", "united-nations", "caused", "Yalta locked in big-power voting that shaped the UN Security Council.", 0.93, 0.89);
rel("yalta-conference", "joseph-stalin", "involved", "Stalin bargained occupation and the UN at Yalta.", 0.95, 0.92);
rel("united-nations", "allies", "followed", "The UN was built to keep the wartime Allies in a permanent body.", 0.95, 0.92);

module.exports = { entities, relationships };
