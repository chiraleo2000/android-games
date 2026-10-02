# Personality Test - MBTI Structure Documentation

This document describes the structure of the MBTI-based personality test, scoring system, and how personality types are determined.

---

## 📁 File Structure

```
src/data/questions/personality/
└── personalityTest.js    # 100 MBTI-based questions
```

---

## 🧠 MBTI Overview

The **Myers-Briggs Type Indicator (MBTI)** is a personality assessment that categorizes individuals into 16 personality types based on 4 dichotomies:

| Dimension | Trait A | vs | Trait B | Description |
|-----------|---------|:--:|---------|-------------|
| **E/I** | Extraversion (E) | vs | Introversion (I) | How you get energy |
| **N/S** | Intuition (N) | vs | Sensing (S) | How you perceive information |
| **F/T** | Feeling (F) | vs | Thinking (T) | How you make decisions |
| **P/J** | Perceiving (P) | vs | Judging (J) | How you approach structure |

---

## 📋 Question Structure

Each question follows this JSON structure:

```javascript
{
    id: 'mbti_001',                  // Sequential ID: mbti_001 to mbti_100
    type: 'likert',                  // Always 'likert' for personality test
    dimension: 'E/I',                // Which MBTI dimension: E/I, N/S, F/T, P/J
    polarity: 'E',                   // Which trait this question measures
    text: {
        en: 'English question text',
        th: 'Thai translation',
        zh: 'Chinese translation'
    },
    traits: {                        // Career trait indicators
        adventurous: 1,              // -3 to +3
        social: 2,                   // -3 to +3
        analytical: -1,              // -3 to +3
        practical: 0                 // -3 to +3
    }
}
```

---

## 📊 Answer Scale (Likert Scale)

Users respond using a 5-point Likert scale:

| ID | Response | Weight | Description |
|----|----------|--------|-------------|
| 1 | Strongly Disagree | -2 | Strong opposition to statement |
| 2 | Disagree | -1 | Mild opposition |
| 3 | Neutral | 0 | Neither agree nor disagree |
| 4 | Agree | +1 | Mild agreement |
| 5 | Strongly Agree | +2 | Strong agreement |

### Multilingual Labels

```javascript
LIKERT_LABELS = {
    1: { en: 'Strongly Disagree', th: 'ไม่เห็นด้วยอย่างยิ่ง', zh: '非常不同意' },
    2: { en: 'Disagree', th: 'ไม่เห็นด้วย', zh: '不同意' },
    3: { en: 'Neutral', th: 'เฉยๆ', zh: '中立' },
    4: { en: 'Agree', th: 'เห็นด้วย', zh: '同意' },
    5: { en: 'Strongly Agree', th: 'เห็นด้วยอย่างยิ่ง', zh: '非常同意' }
}
```

---

## 🧮 Score Calculation

### Step 1: Collect Raw Scores

For each MBTI dimension, questions are tagged with a `polarity` indicating which trait they measure.

**Example:**
- Question with `polarity: 'E'` (Extraversion)
  - User answers "Strongly Agree" (+2) → E score += 2
- Question with `polarity: 'I'` (Introversion)  
  - User answers "Agree" (+1) → I score += 1

### Step 2: Calculate Dimension Scores

For each dimension (E/I, N/S, F/T, P/J):

```javascript
// Example for E/I dimension
E_score = sum of all responses to E-polarity questions
I_score = sum of all responses to I-polarity questions

// Net score determines preference
netScore = E_score - I_score

if (netScore > 0) → User is "E" (Extravert)
if (netScore < 0) → User is "I" (Introvert)
if (netScore === 0) → Borderline (defaults to one based on secondary traits)
```

### Step 3: Determine MBTI Type

Combine the 4 preferences to form the 4-letter type:

```
[E or I] + [N or S] + [F or T] + [P or J] = MBTI Type

Examples:
- INTJ (The Architect)
- ENFP (The Campaigner)
- ISTP (The Virtuoso)
```

---

## 🎭 The 16 MBTI Types

| Type | Name | Description |
|------|------|-------------|
| **INTJ** | Architect | Strategic, independent, determined |
| **INTP** | Logician | Analytical, objective, reserved |
| **ENTJ** | Commander | Bold, imaginative, strong-willed |
| **ENTP** | Debater | Quick-thinking, charismatic, creative |
| **INFJ** | Advocate | Creative, insightful, principled |
| **INFP** | Mediator | Idealistic, empathetic, creative |
| **ENFJ** | Protagonist | Charismatic, natural leaders, inspiring |
| **ENFP** | Campaigner | Enthusiastic, creative, sociable |
| **ISTJ** | Logistician | Practical, fact-minded, reliable |
| **ISFJ** | Defender | Dedicated, warm, protective |
| **ESTJ** | Executive | Organized, logical, assertive |
| **ESFJ** | Consul | Caring, social, traditional |
| **ISTP** | Virtuoso | Bold, practical, experimental |
| **ISFP** | Adventurer | Flexible, charming, artistic |
| **ESTP** | Entrepreneur | Energetic, perceptive, bold |
| **ESFP** | Entertainer | Spontaneous, energetic, fun |

---

## 🎯 Career Trait Mapping

Each question also includes `traits` that map to career preferences:

| Trait | Description | High Score Careers |
|-------|-------------|-------------------|
| **adventurous** | Risk-taking, variety-seeking | Entrepreneur, Pilot, Explorer |
| **social** | People-oriented, collaborative | Teacher, Nurse, HR Manager |
| **analytical** | Logic-driven, problem-solving | Data Scientist, Engineer, Lawyer |
| **practical** | Hands-on, concrete results | Chef, Mechanic, Surgeon |

### Trait Score Range

Each trait value ranges from **-3 to +3**:

| Value | Meaning |
|-------|---------|
| +3 | Strongly indicates this trait |
| +2 | Moderately indicates this trait |
| +1 | Slightly indicates this trait |
| 0 | No impact on this trait |
| -1 | Slightly contradicts this trait |
| -2 | Moderately contradicts this trait |
| -3 | Strongly contradicts this trait |

---

## 📈 Final Results Display

After completing 100 questions, users receive:

1. **MBTI Type** (e.g., "ENFJ - The Protagonist")
2. **Dimension Percentages**
   - E 65% / I 35%
   - N 45% / S 55%
   - F 70% / T 30%
   - P 40% / J 60%
3. **Career Trait Scores**
   - Adventurous: 75%
   - Social: 82%
   - Analytical: 45%
   - Practical: 60%
4. **Recommended Career Paths** based on trait matching

---

## 📝 Question Distribution

The 100 questions are distributed across dimensions:

| Dimension | Questions | Polarity Split |
|-----------|-----------|----------------|
| **E/I** (Extraversion/Introversion) | 25 | ~12 E, ~13 I |
| **N/S** (Intuition/Sensing) | 25 | ~12 N, ~13 S |
| **F/T** (Feeling/Thinking) | 25 | ~12 F, ~13 T |
| **P/J** (Perceiving/Judging) | 25 | ~12 P, ~13 J |

---

## 🔄 Game Flow

```
┌────────────────────────────────────────┐
│       Start Personality Test           │
│        (100 questions total)           │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│       Question Display Loop            │
│   1. Show question text                │
│   2. Display 5 Likert options          │
│   3. User selects response             │
│   4. Update dimension scores           │
│   5. Update trait scores               │
│   6. Next question until 100           │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│        Calculate Results               │
│   - Determine 4 letter type            │
│   - Calculate % for each dimension     │
│   - Sum trait scores                   │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│        Display Results                 │
│   - MBTI Type with description         │
│   - Personality breakdown              │
│   - Career recommendations             │
└────────────────────────────────────────┘
```

---

## 🔗 Related Files

- `src/App.jsx` - Main game logic and MBTI calculation
- `src/data/questions/personality/personalityTest.js` - Question data
- `src/data/README.md` - Career simulation documentation
