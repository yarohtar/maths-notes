A singularity of $f$ is a point where $f$ is not analytic.
Singularity checklist:
- Is $z_0$ a branch-point singularity?
- Is it a non-isolated singularity?
- If neither, find Laurent series around $z_0$ and check:
	- If we have a Taylor series (i.e. $a_n=0$ for $n<0$), then it is a removable singularity
	- If we have an $N>0$ s.t. $a_n=0$ for $n<-N$ and $a_{-N}\neq 0$ then we have a pole of order $N$
	- If there is no such $N$ then we have an essential singularity.

Let $f$ have an essential singularity at $z_0$. Then in any neighbourhood of $z_0$, $f(z)$ takes all possible complex values except at most one.
