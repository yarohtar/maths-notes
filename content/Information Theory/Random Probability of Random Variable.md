Let $(\Omega,\mathcal{P},\mathbb{P})$ be a [[Probability/Probability Space]]
Let $A$ be a discreet set.
Let $X:\Omega \to A$ be a [[Probability/Random Variable]] 
Let $P:A\to[0,1]$ be given by:
$$
P(a) = \mathbb{P}(X=a)
$$
i.e. the distribution of $X$.
Consider now the [[Probability/Random Variable]] $Q:\Omega\to[0,1]$ given by:
$$
Q(\omega) = P(X(\omega))
$$
often written as just $Q=P(X)$.
From the definition of $P$, 
you might naively substitute:
$$
Q=P(X)=\mathbb{P}(X=X)=1
$$
This is wrong. 
We need to fully expand the definitions to understand why.
Firstly:
$$
P(a)=\mathbb{P}(\{ \omega' \in \Omega:X(\omega') = a \})
$$
Now we can properly see:
$$
Q(\omega)=P(X(\omega))=\mathbb{P}(\{ \omega' \in \Omega : X(\omega') = X(\omega) \})
$$
i.e. $Q$ is randomly sent to a probability in the image of $P$

Thinking about it further, 
if $X$ takes value $x_{i}\in A$ with probability $p_{i}\in[0,1]$
then $Q$ will take the value $p_{i}$ with probability $p_{i}$
