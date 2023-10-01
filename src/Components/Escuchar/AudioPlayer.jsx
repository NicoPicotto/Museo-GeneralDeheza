import React from 'react';
import { Stack, Text, Heading } from '@chakra-ui/react';
import Player from '@madzadev/audio-player';

const AudioCard = ({ src, title }) => {
	const tracks = [
		{
			url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
			title: 'Madza - Chords of Life',
			tags: ['house'],
		},
		{
			url: src,
			title: 'Una esquina tradicional',
			tags: ['dnb'],
		},
		{
			url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
			title: 'Madza - Persistence',
			tags: ['dubstep'],
		},
	];

	const colors = `html {
        --tagsBackground: transparent;
        --tagsText: #ffffff;
        --tagsBackgroundHoverActive: #2cc0a0;
        --tagsTextHoverActive: #ffffff;
        --searchBackground: #18191f;
        --searchText: #ffffff;
        --searchPlaceHolder: #575a77;
        --playerBackground: gray;
        --titleColor: #ffffff; 
        --timeColor: #ffffff;
        --progressSlider: #40342A;
        --progressUsed: #40342A;
        --progressLeft: #736048;
        --volumeSlider: #40342A;
        --volumeUsed: #40342A;
        --volumeLeft:  #736048;
        --playlistBackground: #71734C;
        --playlistText: #ffffff;
        --playlistBackgroundHoverActive:  #18191f;
        --playlistTextHoverActive: #ffffff;
    }`;

	return (
		<Stack w='100%'>
			<Player trackList={tracks} includeSearch={false} customColorScheme={colors} includeTags={false}/>
		</Stack>
	);
};

export default AudioCard;
