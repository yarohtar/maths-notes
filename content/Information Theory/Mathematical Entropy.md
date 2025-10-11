Consider a random variable $X$ taking values $x_{1}\dots x_{n}$ with probabilities $p_{1},\dots,p_{n}$. 
The entropy of $X$ is:
$$
H(X)=H(p_{1},\dots,p_{n}) = - \sum_{i=1}^{n}p_{i}\log p_{i}
$$
where we take $\log_{2}$.
[[Information Theory/Joint Entropy]]
[[Information Theory/Conditional Entropy]]
[[Information Theory/Fano's Inequality]]
[[Information Theory/Mutual Information]]

### Lemma
$H(p_{1},\dots ,p_{n})\leq \log n$ with equality iff $p_{1}=\dots=p_{n}=\frac{1}{n}$
#### Proof
Take $q_{1}=\dots=q_{n}=\frac{1}{n}$ in [[Information Theory/Gibbs' inequality]].

### Intuition
Entropy is a measure of 'randomness' or 'uncertainty'
The entropy $H(X)$ is roughly speaking the expected number of tosses of a fair coin needed to simulate $X$
#### Example 1
Suppose $p_{1}=p_{2}=p_{3}=p_{4}=\frac{1}{4}$
we identify $\{ x_{1},\dots x_{4} \}$ with $\{ H H, HT, TH, TT \}$
so $H(X)=2$
#### Example 2
$(p_{1},p_{2},p_{3},p_{4})=\left( \frac{1}{2},\frac{1}{4},\frac{1}{8},\frac{1}{8} \right)$
$H(X)=\frac{1}{2}\cdot 1+\frac{1}{4}\cdot 2+\frac{1}{8}\cdot 3+\frac{1}{8} \cdot 3=\frac{7}{4}$
(to get this, think of a binary tree)

So Example 1 is more random than Example 2.

