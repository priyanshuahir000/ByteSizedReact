import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Paper,
  TableContainer,
} from "@mui/material";

const TestReport = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "30px",
        margin: "30px auto",
        maxWidth: "900px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full page height
      }}
    >
      {/* Report Header */}
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          TEST REPORT
        </Typography>
        <Divider sx={{ margin: "10px 0", backgroundColor: "#000" }} />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1, // Pushes the footer to the bottom
        }}
      >
        {/* Customer Details Section */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#fff",
          }}
        >
          <Typography>
            <strong>Test Report No / Ref. No.:</strong> BSES / CMT / 24 - 05 /
            101 - 01 &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> 26/06/2024
          </Typography>
          <Typography>
            <strong>Name and Address of Customer:</strong> A.G.F. G & H (Tech),
            Air Force Station - 491003
          </Typography>
          <Typography>
            <strong>Name of Work:</strong> CA NO : CECA CWE(AF)RAJ/GE-1/13 OF
            2023-24 : Provision of Certain B/R & E/M Work Service IN TECH AREA
            AT AF STN.
          </Typography>
          <Typography>
            <strong>Name of Agency:</strong> M/s. Malik K. Patel
          </Typography>
          <Typography>
            <strong>Customer Ref. No.:</strong> 297/23-24/45
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Date:</strong> 28/11/2024
          </Typography>
          <Typography>
            <strong>Condition of sample during received:</strong> Good
          </Typography>
          <Typography>
            <strong>Identification of Method:</strong> I. S. : 269-2015
            (Reaffirmed 2020)
          </Typography>
          <Typography>
            <strong>Starting Date of Test:</strong> 29/7/2024
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Ending Date of Test:</strong> 26/8/2024
          </Typography>
          <Typography>
            <strong>Details of Sample:</strong> Hathi Cement (Ambuja Cement Ltd
            OPC 43 Grade) &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <strong>Batch/Week No:</strong> 22/2024 - 05 Weeks
          </Typography>
          <Typography>
            <strong>Lab No.:</strong> 982101
          </Typography>
        </Box>

        {/* Physical Tests Section */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "15px",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            PHYSICAL TESTS
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: 650, border: "1px solid #e0e0e0" }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    SR. NO.
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    TEST DESCRIPTION
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    TEST RESULTS
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    I.S. REQUIREMENT
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    TESTED AS PER I.S. : 4031
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell>Specific Gravity</TableCell>
                  <TableCell align="center">3.15</TableCell>
                  <TableCell align="center">Default 3.15</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">2</TableCell>
                  <TableCell>Consistency in %</TableCell>
                  <TableCell align="center">30.45</TableCell>
                  <TableCell align="center">Default 3.15</TableCell>
                  <TableCell align="center">Part - 4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" rowSpan={2}>
                    3
                  </TableCell>
                  <TableCell>Fineness - By Blain’s method in m²/Kg</TableCell>
                  <TableCell align="center">269</TableCell>
                  <TableCell align="center">
                    Shall not be less than 225 m²/Kg
                  </TableCell>
                  <TableCell align="center">Part - 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fineness - By Dry Sieving</TableCell>
                  <TableCell align="center">1.65</TableCell>
                  <TableCell align="center">
                    Residue shall be &lt; 10 %
                  </TableCell>
                  <TableCell align="center">Part - 1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            sx={{
              marginTop: "20px",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#555",
            }}
          >
            <strong>Remarks:</strong> Above sample conforms to the requirements
            of Indian Standards.
          </Typography>
        </Box>
      </Box>

      {/* Footer Notes */}
      <Box
        sx={{
          marginTop: "20px",
          backgroundColor: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}
        >
          <strong>Note:</strong>
          {` 
          (1) Results may vary due to technical limitations.
          (2) Reports cannot be used for promotional purposes.
          (3) Test results are only valid for the provided sample.
          (4) This report cannot be reproduced without written consent.
          `}
        </Typography>
        <Typography
          align="right"
          sx={{ marginTop: "20px", fontWeight: "bold" }}
        >
          For BSES,
          <br />
          Authorized Signatory
        </Typography>
      </Box>
    </Paper>
  );
};

export default TestReport;
