After receiving a [[Information Theory/Binary Code]] through a [[Information Theory/Binary Symmetric Channel (BSC)]], we need to decode it.

There are 3 rules we consider when decoding.
Due to the lemma at the bottom, we shall use the [[Information Theory/Decoding rule#Minimum distance]] decoding rule.
## Ideal Observer
The ideal observer decoding rule decodes $x\in \{ 0,1 \}^{n}$ as the codeword $c\in C$ maximising $P(c \text{ sent} | x \text{ received})$

This is actually the most reasonable decoding rule but it assumes that the observer has information about the probability of each message being sent.

---
## Maximum likelihood
The maximum likelihood decoding rule decodes $x\in \{ 0,1 \}^{n}$ as $c\in C$ maximising $P(x \text{ received}|c \text{ sent})$
### Lemma
If all messages are equally likely then maximum likelihood agrees with the Ideal Observer.
#### Proof
By Baye's rule trivial.

---
## Minimum distance
The minimum distance decoding rule decodes $x\in \{ 0,1 \}^{n}$ as $c\in C$ minimising the [[Information Theory/Hamming distance]] $d(x,c)$.
Some convention needed in the case of a tie, eg. choose at random or ask for message to be sent again.
### Lemma
If the probability of a bit being mismatched is $p<\frac{1}{2}$ then the minimum distance rule agrees with Maximum Likelihood.
#### Proof
Suppose $d(x,c)=r$
$P(x\text{ recd}| c \text{ sent})=p^{r}(1-p)^{n-r}=(1-p)^{n}\left( \frac{p}{1-p} \right)^{r}$
Since $p<\frac{1}{2}$, choosing $c$ to maximise the above probability is the same as choosing $c$ to minimize $d(x,c)$
