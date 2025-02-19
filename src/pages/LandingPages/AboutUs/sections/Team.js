import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import Liza from "assets/images/Liza.jpg";
import Holly from "assets/images/Holly.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container >
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="black">
              The Executive Team
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Liza}
                name="Lizalise Luxande"
                position={{ color: "info", label: "Co-founder" }}
                description="Lizalise holds a Business Science degree in Computer Science from the University of Cape Town and currently works at Boston Consulting Group in management consulting. During her time at UCT, she served as the Chairperson of Women in Computer Science, advocating for greater inclusivity in tech. Passionate about driving impact beyond the corporate world, she co-founded Tech Youth to leverage technology and strategy for meaningful change."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Holly}
                name="Holly Judge"
                position={{ color: "info", label: "Co-founder" }}
                description="Holly is a software engineer with a BA in English Literature and Computer Science and a BSc Honours in Computer Science from the University of Cape Town. She has worked at First National Bank and NTT Data, gaining extensive experience in software development and technology solutions. Passionate about using technology for social impact, she co-founded Tech Youth to drive meaningful change through innovation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Ivana Flow"
                position={{ color: "info", label: "Athlete" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Marquez Garcia"
                position={{ color: "info", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
