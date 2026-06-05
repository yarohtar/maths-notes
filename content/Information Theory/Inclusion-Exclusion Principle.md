Given finite sets $A$ and $B$:
$$
\lvert A\cup B \rvert =\lvert A \rvert  + \lvert B \rvert  - \lvert A\cap B \rvert 
$$

More generally:
Let $(E,\mathcal{E},\mu)$ be a [[Analysis/Measure/Measure Space]].
Let $E_{1},E_{2},\dots,E_{n}\in \mathcal{E}$ be sets of finite measure.
Then:
$$
\mu\left( \bigcup_{i=1}^{n} E_{i} \right) = \sum_{S\in \mathcal{P}^{+}[n]} (-1)^{\lvert S \rvert +1} \mu\left( \bigcap_{i\in S} E_{i} \right)
$$
where $\mathcal{P}^{+}[n]$ is the set of non-empty subsets of $[n]=\{ 1,\dots,n \}$ 
In particular, any $n$ observables in a [[Probability/Probability Space]] satisfy this relation.
### Proof
The result follows by expanding the expression:
$$
1-(1-1_{E_{1}})(1-1_{E_{2}})\dots(1-1_{E_{n}})
$$
which is the indicator function for 
$$
\overline{\bigcap_{i=1}^{n}\overline{E_{i}}} = \bigcup_{i=1}^{n} E_{i}
$$
