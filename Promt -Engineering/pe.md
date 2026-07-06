 What is Prompt Engineering ?

  - Prompt Engineering is the practice of designing and refining the instruction(called prompts) given to an AI model to get better, more accurate & more useful output.

  What is LLM ?

   - LLM stands for large language model.
   - It is an AI model trained on massive amount of text data to ->

         1. Understand language 
         2. Predict the next word in a sentence
         3. Generate meaningful respose

         ex.google keyboard

 Role of LLM in Prompt Engineering :-
   
   - Prompt engineering -> How to talk
   - LLM -> Who's you're talking to

   - LLM's helps us to ->

    1. Read our prompt
    2. Interpret our intent
    3. Generate a good response based on our prompt.



MODULE 1 -> Introduction to LLM & Prompting Basics.
  . Descriminative AI :-
    
    - Descriminative AI is a AI technique that helps us to classify the data.
    - ex:
          1. Email- spam & not spam
          2. Face ID(face Recognition)
          3. Netflix recomendation etc..
    
  . Generative AI :-
      
     - In generative AI, it not only classify the data but it generate some new data through AI.
     - ex:
           1. ChatGPT (Text generation/image)
           2. MidJourney (image generation)
           3.GitHub copilot (code generation) etc...

Evaluation of -> RNN, LSTM & transformer


  1.  RNN (Recurrent Neural Network) :-
     
     - An RNN is a type of neural network designed to process sequential data like ...
           - text
           - speech
           - time series etc...
     - It process the data step by step.
     - It remember previous information using hidden state in RNN.

      previous info --> RNN --> New info
      ex. sentence - "i love AI"
      RNN reads it - "i" -> then "love" -> then "AI"
      (like keeping memory of previous word)

      The Disadvantages are :-

       1. It cannot remember a long sentence because of short memory.
       2. struggle with reading long sentence.

  2. LSTM (Long Short-term Memory) :-
     
     - It is an improved version of RNN.

     How LSTM works?

      - LSTM uses some gates to control information.
      - It have three gates :-
           
           - Forget gate -> removes the useless data 
           - Input gate -> adds new data /information.
           - output gate -> decides whats the output
      - Basically it acts like a "smart memory system".

     Advantages of LSTM :-
      
      - It solve RNN's memory problem.
      - Works well for ->
           
           - language translation 
           - speech recognition
           - Time-series prediction
    
   3. Transformer :-
      
      - It is a Mordern AI architecture That Power LLM's(like ChatGPT)
      
    How it works ?
     
     - It uses self-attention mechanism.
       (it allows to understand the context, relation between words in a sequence) 
     - looks at all words at once, not step by step.

     ex- "The animal didn't cross the road bcz it was tired"
    
    - In this Example - the transformer understand "it" refers to animal using attention mechanism.

 Adavantages of Transformer :-
  
   1. It Handle Long Context very well.
   2. faster (processing is very first )
   3. Give more accurate o/p than RNN/LSTM.

    Feature             RNN           LSTM           Transformer
     
    Data processing     Sequential    Sequential     Parallel
    Memory              Short         Long           Very long
    Speed               Slow          Slow           Fast
    Performance         Basic         Better         Best



PROMPT ENGINEERING :-
 
   - By the help of transformer we can do the prompt engineering in a better way.
      
      1. Long context : Transformer helps to memorise the long context given in the prompt.(it works on parallel data processing)
      2. Contextual understanding : If we can put same word in different form then transformer also understand that word properly.

      ex- Bank (river bank, financial bank)

      - AI don't read our words, it read tokens
      - We can't take 1 token as a 1 word ,although"unbelievable" word can segrigate to different token

      Ex- 
       
       - Words: "playing" -> Play + ing
       - Words: "Transformation" -> Trans + Form + Ation

    - AI didn't understand word directly so we can segrigate different token to form prefix(re-. un-) & suffix (-ing, -ation, -ed) so that AI can recreate some words by recognize it properly.

    
    TOKEN -> 

     AI tools                       Approx token limit

     ChatGPT                        ~128,000 to ~256,000 token (depending on version)
    
     Gemini                         ~1,000,000 to ~2,000,000 tokens

     Claude                         ~200,000 tokens(standard) upto ~1,000,000 token (enterprize)

     Perplexity                     ~128,000 to ~200,000 tokens




  Context window of different LLMS :-
   
   1. ChatGPT -> excelent for long discussion , essays, emails, summerization within it's ~128k to ~256k tokens.
   2. Gemini -> Processing multiple books, large size docs at once , large codebase analysis in one snapshot, complex project tasks across long charts etc...
   3. Claude -> It deals for large document reasoning/scanning with more safely.
   4. Perplexity AI -> It uses in various backend model.


  Structure Prompting :-

    1. Role(person role)
    2. Context
    3. task(what action we perform)
    4. Constraints ( negative constraints)
    5. output

     We can take somr scerario for prompting :-
       use case-1 : Writing & content creation

        - simple prompt -> Write a cold mail for google internship.
        - engineering prompt -> " act as a career coach.write a personalized cold email to a recruiter at google for a data scirncr internship .mention my proficiency in python & SQL.keep the tone profesional but eager & limit it to 150 words.

        use case-2 : coding & technical task

          - simple prompt -> fix this code (some code)
          -engineering prompt -> "act as a senior python developer.review the following code for a log-in logics, identify potential security vulnarabilities and logical errors.provide the corrected code with comments explaining each fix."
  

MODULE 2 --> CORE PROMPTING TECHNIQUE :-

  1. Zero shot prompting : "direct order"
     
     - In this prompting we didn't give any example to AI but we Provide a small instructuion and we think that by the help of pre-trained knowledge, AI will provide the answers.

     EX-

     prompt -> Clasify the sentiment of this review: "the battery of this laptop is amazing but the screen is a bit dull"
     Output -> mixed/neutral

  2. Few shot prompting : the"pattern maker"

      - we have faced some problem on zero shot prompting because sometime it failed but in few shot prompting , we have to give some example to understand the pattern of our prompt thrn it gives a good response.

     EX-

     Give the customer feedback in json format.
      
      prompt->
       example 1 : i love the pizza! -> {"sentiment": "positive","label" : 1}
       example 2 : The delivery was late ->{"sentiment":"negative","label":0}
       example 3 : The food was Okay -> { "sentiment" : "neutral","label":0.5}


   3. Chain of thought(COT) : the "logical thinker"
     
      - This is the most imp technique to solve complex problem.if we can put anything in AI , and we give prompt "think step by step " but AI will look in full sentence and create the logic then give the output. so it's create a little "hallucination"/confusion.

       - use case ->
       - prompt -> " a farmer has 15 sheep. all but 8 die.how much are left? let's think step-by-step"

   4. Instruction Prompting : framework

     - In this prompting we can put step-by-step instruction so that it will give the required output.
     - persona(role) : "act as a senior python dev"  
     - constraints(limit) : "don't use external libraries.keep code under 20 lines"
     - specific instruction : "explain the code like i am 5 years old"
     
       
       use case -> writing professional email

         prompt->" act as a polite HR manager . write a rejection email for a candidate who cleared the interview but we can't hire due to budget cuts.Mention that we will keep their cv for future. constraints -> keep it simple & emphathetic, don't mention the exact budget amount"

   
  MODULE 3 --> ADVANCED PROMPT ENGINEERING FRAMEWORK :
    

    1. ReAct Framework (reason + Action ):-
        
        - ReAct means reason + acting.
        - before some time AI only think or AI only give the result but now  in ReAct framework AI will work on the basis of a loop.like it will think first then give the result then think again weather it's right or wrong then again give the result.

          use case-> Researching a market trend using AI with browsing capabilities (like ChatGPT with search or Perplexity).

          prompt-> "solve the following task using a thought -action -observation loop. task: analyse the current stock performance of NVIDIA comapred to its compititors in the last & days.
          Instruction: 1. start with a 'Thought'(what do we need to find?)
                       2. perform an Action(search for the specific data)
                       3. Provide an obserbation(summarize what we find).
                       4. repeat until you can provide a final recomendation for a short-term "investor"

    2. Three of Thoughts(TOT):-
      
       - "Three of Thoughts" is more efficient than "Chain of Thoughts", we can say TOT is a big brother of COT.
       - In "COT" AI can think for only one but in "TOT" it can segrigate one line into different branches/nodes like as a tree then think it separately.


          use case -> In TOT the stratagies are support will take A, B & c in these 3 branches of a line suppose we find B will work better than C/A then they cancel C/A only take B as the resultant.

          prompt -> "imagine three different experts are brainstroming a solution to this probblem : how can a small local bakery increases it's sales by 50% in 3 months with a budget of only $500?"
    
    



    


       

