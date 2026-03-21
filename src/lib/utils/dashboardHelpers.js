const getGreetingText = (hours = 0) => {
  const greetingMapping = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    late: "Working late again",
    early : "Early bird"
  };

  const ranges = {
    morning: {
      min: 8,
      max: 12,
    },
    afternoon: {
      min: 12,
      max: 15,
    },
    evening: {
      min: 15,
      max: 20,
    },
    late: {
      min: 20,
      max: 24,
    },
    early :{
        min : 0,
        max: 8
    }
  };

  for (const key in ranges) {
    if (hours >= ranges[key].min && hours < ranges[key].max) {
      return greetingMapping[key];
    }
  }
};

export { getGreetingText };
