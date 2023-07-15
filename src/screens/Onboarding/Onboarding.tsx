import React, { useEffect } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Animated } from 'react-native';

// Components
import OnboardingCard from '../../components/OnboardingCard';
import OnboardingPaginator from '../../components/OnboardingPaginator';
import Button from '../../components/Button';

// Controller
import OnboardingController from './OnboardingController';

// Geral
const screenWidth = Dimensions.get('screen').width;


const Onboarding = () => {
  const { OnboardingList, onboardingRef, scrollX, handleScroll, currentPage, nextPage, skipOnboarding, ViewableItemsChanged } = OnboardingController();

  return (
    <View style={styles.container}>
      <FlatList 
        ref={onboardingRef}
        data={OnboardingList}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <View style={styles.viewFlatList}>
            <OnboardingCard image={item.image} title={item.title} />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={5}
        onViewableItemsChanged={ViewableItemsChanged}
      />
      <View style={styles.viewPaginator}>
        <OnboardingPaginator pages={OnboardingList} scrollX={scrollX} />
      </View>
      <View style={styles.viewButtons}>
        { currentPage == OnboardingList?.length - 1 ? 
          <Button buttonTitle='CONFIRM YOUR IDENTITY' onPress={() => {}} />
          :
          <>
            <Button buttonTitle='SKIP' buttonWithoutBackground onPress={() => skipOnboarding()} />
            <Button buttonTitle='NEXT' onPress={() => nextPage()} />
          </>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewFlatList: {
    flex: 1,
    width: screenWidth
  },
  viewPaginator: {
    alignSelf: 'center',
    marginTop: 20
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10
  }
});

export default Onboarding;