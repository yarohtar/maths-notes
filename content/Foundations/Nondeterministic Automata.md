A tople $N=(\Sigma,Q,\delta,q_{0},F)$ is called nondeterministic automaton if
1. $Q$ is a finite set of states
2. $q_{0}\in Q$ is a start state
3. $F\subseteq Q-\{ q_{0} \}$ accept states
4. $\delta:Q\times \Sigma\to \mathcal{P}(Q)$ (to the powerset of $Q$)

Define $\hat{\delta}$ recursively:
$\hat{\delta}(q,\epsilon)=\{ q \}$
$\hat{\delta}(q,wa)=\bigcup \{ \delta(p,a); p \in\hat{\delta}(q,w) \}$

Then $\mathcal{L}(N)=\{ w:\hat{\delta}(q_{0},w)\cap F\neq \emptyset \}$

